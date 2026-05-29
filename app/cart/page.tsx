// app/cart/page.tsx
import Link from "next/link";
import SiteHeader from "../../src/components/SiteHeader";
import SiteFooter from "../../src/components/SiteFooter";

export default function CartPage() {
  return (
    <div className="min-h-screen flex flex-col bg-vskc-white">
      <SiteHeader />

      <main className="flex-grow max-w-4xl mx-auto w-full px-6 py-16">
        <h1 className="text-4xl font-serif text-vskc-espresso">Your Bag</h1>

        <div className="mt-8 rounded-lg border border-vskc-sand bg-vskc-sand/10 p-10 text-center">
          <p className="text-vskc-charcoal/70">Your bag is currently empty.</p>

          <Link
            href="/products"
            className="mt-6 inline-flex rounded-md bg-vskc-espresso px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-vskc-charcoal"
          >
            Shop Products
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}