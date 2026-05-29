// app/products/page.tsx
import Image from "next/image";
import Link from "next/link";
import { prisma } from "../../src/lib/prisma";
import SiteHeader from "../../src/components/SiteHeader";
import SiteFooter from "../../src/components/SiteFooter";

type ProductsPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const resolvedSearchParams = await searchParams;
  const categorySlug = resolvedSearchParams?.category;

  const products = await prisma.product.findMany({
    where: categorySlug
      ? {
          category: {
            slug: categorySlug,
          },
        }
      : undefined,
    include: {
      category: true,
      images: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen flex flex-col bg-vskc-white">
      <SiteHeader />

      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-16">
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-vskc-tan font-semibold mb-3">
            Shop VSKC
          </p>

          <h1 className="text-4xl md:text-5xl font-serif text-vskc-espresso">
            Kolhapuri Chappals
          </h1>

          <p className="mt-4 max-w-2xl text-vskc-charcoal/70">
            Explore handcrafted Kolhapuri chappals made for everyday comfort,
            festive wear, and timeless style.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          <Link
            href="/products"
            className="rounded-full border border-vskc-sand px-5 py-2 text-sm text-vskc-charcoal hover:border-vskc-tan hover:text-vskc-tan"
          >
            All
          </Link>

          <Link
            href="/products?category=men"
            className="rounded-full border border-vskc-sand px-5 py-2 text-sm text-vskc-charcoal hover:border-vskc-tan hover:text-vskc-tan"
          >
            Men
          </Link>

          <Link
            href="/products?category=women"
            className="rounded-full border border-vskc-sand px-5 py-2 text-sm text-vskc-charcoal hover:border-vskc-tan hover:text-vskc-tan"
          >
            Women
          </Link>

          <Link
            href="/products?category=kids"
            className="rounded-full border border-vskc-sand px-5 py-2 text-sm text-vskc-charcoal hover:border-vskc-tan hover:text-vskc-tan"
          >
            Kids
          </Link>
        </div>

        {products.length === 0 ? (
          <div className="rounded-lg border border-vskc-sand bg-vskc-sand/10 p-10 text-center">
            <p className="text-vskc-charcoal/70">
              No products found. We will add products soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => {
              const primaryImage =
                product.images?.find((img) => img.isPrimary) ||
                product.images?.[0];

              return (
                <Link
                  href={`/products/${product.slug}`}
                  key={product.id}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] bg-vskc-sand/10 rounded-lg mb-4 overflow-hidden border border-vskc-sand/50 transition-colors group-hover:border-vskc-tan">
                    {primaryImage ? (
                      <Image
                        src={primaryImage.url}
                        alt={primaryImage.altText || product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-sm text-vskc-charcoal/50">
                        No Image Available
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <p className="text-xs text-vskc-tan font-semibold uppercase tracking-wider mb-1">
                        {product.category?.name || "Collection"}
                      </p>
                      <h2 className="text-lg font-serif text-vskc-espresso">
                        {product.name}
                      </h2>
                    </div>

                    <span className="text-sm font-medium text-vskc-charcoal whitespace-nowrap">
                      ₹{product.basePrice.toString()}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}