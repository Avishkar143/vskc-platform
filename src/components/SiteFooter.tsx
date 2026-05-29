// src/components/SiteFooter.tsx
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-vskc-sand bg-vskc-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        <div>
          <h2 className="text-2xl font-serif tracking-wider text-vskc-espresso">
            VSKC
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-vskc-charcoal/70">
            Handcrafted Kolhapuri chappals inspired by traditional craft,
            comfort, and timeless Indian style.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-vskc-espresso">
            Shop
          </h3>
          <div className="mt-4 flex flex-col gap-2 text-sm text-vskc-charcoal/70">
            <Link href="/products">All Products</Link>
            <Link href="/products?category=men">Men</Link>
            <Link href="/products?category=women">Women</Link>
            <Link href="/products?category=kids">Kids</Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-vskc-espresso">
            Company
          </h3>
          <div className="mt-4 flex flex-col gap-2 text-sm text-vskc-charcoal/70">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/cart">Bag</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 border-t border-vskc-sand pt-6 text-center text-xs text-vskc-charcoal/60">
        © {new Date().getFullYear()} VSKC. All rights reserved.
      </div>
    </footer>
  );
}