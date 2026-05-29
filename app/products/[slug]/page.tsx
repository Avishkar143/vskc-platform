// app/products/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "../../../src/lib/prisma";
import SiteHeader from "../../../src/components/SiteHeader";
import SiteFooter from "../../../src/components/SiteFooter";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const resolvedParams = await params;

  const product = await prisma.product.findUnique({
    where: {
      slug: resolvedParams.slug,
    },
    include: {
      category: true,
      images: true,
      variants: true,
    },
  });

  if (!product) {
    notFound();
  }

  const primaryImage =
    product.images?.find((img) => img.isPrimary) || product.images?.[0];

  const galleryImages = product.images || [];
  const variants = product.variants || [];
  const availableVariants = variants.filter((variant) => variant.stock > 0);
  const hasStock = availableVariants.length > 0;
  const colorNames = Array.from(
    new Set(
      variants
        .map((variant) => {
          const attributes = variant.attributes as {
            color?: string;
          } | null;

          return attributes?.color;
        })
        .filter(Boolean),
    ),
  );
  const buildNames = Array.from(
    new Set(
      variants
        .map((variant) => {
          const attributes = variant.attributes as {
            build?: string;
          } | null;

          return attributes?.build;
        })
        .filter(Boolean),
    ),
  );

  return (
    <div className="min-h-screen flex flex-col bg-vskc-ivory">
      <SiteHeader />

      <main className="flex-grow">
        <section className="mx-auto w-full max-w-7xl px-6 py-8 md:py-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-vskc-charcoal/70 transition-colors hover:text-vskc-tan"
          >
            <span aria-hidden="true">←</span>
            Back to products
          </Link>

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:items-start">
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_96px]">
                <div className="relative aspect-[5/4] overflow-hidden rounded-lg border border-vskc-sand bg-vskc-white shadow-sm">
                  {primaryImage ? (
                    <Image
                      src={primaryImage.url}
                      alt={primaryImage.altText || product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 58vw, 680px"
                      priority
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-sm text-vskc-charcoal/50">
                      No Image Available
                    </div>
                  )}
                </div>

                {galleryImages.length > 1 && (
                  <div className="grid grid-cols-4 gap-3 md:grid-cols-1">
                    {galleryImages.slice(0, 4).map((image) => (
                      <div
                        key={image.id}
                        className="relative aspect-square overflow-hidden rounded-md border border-vskc-sand bg-vskc-white"
                      >
                        <Image
                          src={image.url}
                          alt={image.altText || product.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 22vw, 96px"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-md border border-vskc-sand bg-vskc-white px-3 py-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-vskc-charcoal/50">
                    Craft
                  </p>
                  <p className="mt-1 text-sm font-semibold text-vskc-espresso">
                    Handmade
                  </p>
                </div>
                <div className="rounded-md border border-vskc-sand bg-vskc-white px-3 py-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-vskc-charcoal/50">
                    Fit
                  </p>
                  <p className="mt-1 text-sm font-semibold text-vskc-espresso">
                    Everyday
                  </p>
                </div>
                <div className="rounded-md border border-vskc-sand bg-vskc-white px-3 py-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-vskc-charcoal/50">
                    Origin
                  </p>
                  <p className="mt-1 text-sm font-semibold text-vskc-espresso">
                    Kolhapuri
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-vskc-sand bg-vskc-white p-6 shadow-sm md:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <p className="rounded-full bg-[#E8F3EC] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2F6B46]">
                  {hasStock ? "Ready to ship" : "Sold out"}
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-vskc-tan">
                  {product.category?.name || "Collection"}
                </p>
              </div>

              <h1 className="mt-4 text-4xl font-serif text-vskc-espresso md:text-5xl">
                {product.name}
              </h1>

              <div className="mt-5 flex flex-wrap items-end justify-between gap-4 border-y border-vskc-sand py-5">
                <div>
                  <p className="text-sm text-vskc-charcoal/60">Price</p>
                  <p className="mt-1 text-3xl font-semibold text-vskc-charcoal">
                    ₹{product.basePrice.toString()}
                  </p>
                </div>
                <p className="max-w-44 text-right text-sm leading-6 text-vskc-charcoal/65">
                  Taxes included. Shipping calculated at checkout.
                </p>
              </div>

              {product.description && (
                <p className="mt-6 text-base leading-8 text-vskc-charcoal/75">
                  {product.description}
                </p>
              )}

              {(colorNames.length > 0 || buildNames.length > 0) && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {colorNames.map((color) => (
                    <span
                      key={color}
                      className="rounded-full border border-vskc-sand px-3 py-1 text-sm text-vskc-charcoal/75"
                    >
                      {color}
                    </span>
                  ))}
                  {buildNames.map((build) => (
                    <span
                      key={build}
                      className="rounded-full border border-vskc-sand px-3 py-1 text-sm text-vskc-charcoal/75"
                    >
                      {build}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-8">
                <label className="mb-2 block text-sm font-semibold text-vskc-charcoal">
                  Select size
                </label>

                <select className="w-full rounded-md border border-vskc-sand bg-vskc-white px-4 py-3 text-vskc-charcoal outline-none transition-colors focus:border-vskc-tan">
                  {variants.length === 0 ? (
                    <option>No sizes available</option>
                  ) : (
                    variants.map((variant) => {
                      const attributes = variant.attributes as {
                        size?: string;
                        color?: string;
                        build?: string;
                      } | null;

                      return (
                        <option
                          key={variant.id}
                          value={variant.id}
                          disabled={variant.stock <= 0}
                        >
                          {attributes?.size || "Size"}
                          {attributes?.color ? ` - ${attributes.color}` : ""}
                          {attributes?.build ? ` - ${attributes.build}` : ""}
                          {variant.stock <= 0 ? " (Out of stock)" : ""}
                        </option>
                      );
                    })
                  )}
                </select>
              </div>

              <button
                className="mt-6 w-full rounded-md bg-vskc-espresso px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-vskc-charcoal disabled:cursor-not-allowed disabled:bg-vskc-charcoal/35"
                disabled={!hasStock}
              >
                {hasStock ? "Add to Bag" : "Currently Unavailable"}
              </button>

              <div className="mt-8 grid gap-4 border-t border-vskc-sand pt-6 sm:grid-cols-3">
                <div>
                  <h3 className="text-sm font-semibold text-vskc-espresso">
                    Handmade Craft
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-vskc-charcoal/70">
                    Inspired by traditional Kolhapuri craftsmanship and shaped
                    for daily comfort.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-vskc-espresso">
                    Delivery
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-vskc-charcoal/70">
                    Ships across India with delivery options shown at checkout.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-vskc-espresso">
                    Care
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-vskc-charcoal/70">
                    Keep away from excess water and wipe gently after use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
