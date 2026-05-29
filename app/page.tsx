// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { prisma } from "../src/lib/prisma";
import AnimatedHero from "../src/components/AnimateHero";
import SiteHeader from "../src/components/SiteHeader";

import SiteFooter from "../src/components/SiteFooter";

const heritageHighlights = [
  {
    title: "PRADA Made in India",
    label: "Global Craft Highlight",
    text: "Vijay Shinde’s Kolhapuri craftsmanship connected with the PRADA Made in India x Inspired by Kolhapuri Chappals story, bringing global attention to traditional artisan work.",
    image: "/about/prada-vskc.jpg",
    href: "/about",
  },
  {
    title: "Gold & Silver Kolhapuri",
    label: "Rare Handmade Work",
    text: "Special gold and silver-toned Kolhapuri chappals made for exhibitions, cultural events, weddings, and premium occasions.",
    image: "/about/catalog-page-05.jpg",
    href: "/about",
  },
  {
    title: "Awards & Recognition",
    label: "Craft Honour",
    text: "VSKC’s work has been recognised through public events, official appreciation, media coverage, and artisan-focused recognition moments.",
    image: "/about/recognition-06.jpg",
    href: "/about",
  },
];

export default async function HomePage() {
  const products = await prisma.product.findMany({
    include: {
      category: true,
      images: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });

  return (
    <div className="min-h-screen flex flex-col bg-vskc-white">
      <SiteHeader />

      <main className="flex-grow w-full">
        <AnimatedHero />

        <section className="border-y border-vskc-sand bg-vskc-espresso px-4 py-14 text-white sm:px-6 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col justify-between gap-4 md:mb-10 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-vskc-tan">
                  Why VSKC
                </p>
                <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
                  More than footwear — a recognised Kolhapuri craft story.
                </h2>
              </div>

              <Link
                href="/about"
                className="text-sm font-semibold uppercase tracking-[0.18em] text-vskc-tan transition hover:text-white"
              >
                Read full story →
              </Link>
            </div>

            <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 sm:-mx-6 sm:gap-6 sm:px-6">
              {heritageHighlights.map((item) => (
                <Link
                  href={item.href}
                  key={item.title}
                  className="group grid min-w-[92vw] snap-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 shadow-sm backdrop-blur transition hover:border-vskc-tan sm:min-w-[86vw] sm:rounded-[2rem] lg:min-w-[86vw] lg:grid-cols-[1.05fr_0.95fr] xl:min-w-[980px]"
                >
                  <div className="relative aspect-[3/4] bg-white sm:aspect-[4/5] lg:aspect-auto lg:min-h-[620px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain transition duration-700 group-hover:scale-[1.01]"
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 86vw, 520px"
                    />
                  </div>

                  <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-vskc-tan">
                      {item.label}
                    </p>

                    <h3 className="mt-3 font-serif text-2xl leading-tight text-white sm:text-3xl lg:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                      {item.text}
                    </p>

                    <span className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-vskc-tan transition group-hover:text-white">
                      View story →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex items-end justify-between gap-6 border-b border-vskc-sand pb-4 mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-vskc-tan font-semibold mb-2">
                Handcrafted Heritage
              </p>
              <h1 className="text-3xl md:text-4xl font-serif text-vskc-espresso">
                Featured Kolhapuri Chappals
              </h1>
            </div>

            <Link
              href="/products"
              className="hidden sm:inline-flex text-sm font-medium text-vskc-charcoal hover:text-vskc-tan transition-colors"
            >
              View all products →
            </Link>
          </div>

          {products.length === 0 ? (
            <div className="rounded-lg border border-vskc-sand bg-vskc-sand/10 p-10 text-center">
              <p className="text-vskc-charcoal/70">
                No products yet. We will add products and images soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    <div className="relative mb-4 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg border border-vskc-sand/50 bg-white p-4 transition-colors group-hover:border-vskc-tan sm:p-6">
                      {primaryImage ? (
                        <Image
                          src={primaryImage.url}
                          alt={primaryImage.altText || product.name}
                          fill
                          className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 100vw, 50vw"
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
        </section>

        <section className="bg-vskc-sand/20 px-6 py-24">
          <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="font-serif text-2xl text-vskc-espresso">
                Handmade
              </h3>
              <p className="mt-3 text-sm leading-6 text-vskc-charcoal/70">
                Crafted with attention to detail and inspired by traditional
                Kolhapuri workmanship.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-vskc-espresso">
                Comfortable
              </h3>
              <p className="mt-3 text-sm leading-6 text-vskc-charcoal/70">
                Designed for daily use, festive wear, and timeless Indian style.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-vskc-espresso">
                Authentic
              </h3>
              <p className="mt-3 text-sm leading-6 text-vskc-charcoal/70">
                A modern platform for traditional Kolhapuri chappals and craft.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}