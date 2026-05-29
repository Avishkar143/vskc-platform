// src/components/SiteHeader.tsx
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-vskc-sand bg-vskc-white/90 backdrop-blur-md px-6 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-serif text-3xl tracking-[0.18em] text-vskc-espresso transition-colors group-hover:text-vskc-tan">
            VSKC
          </span>

          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.32em] text-vskc-tan">
            Kolhapuri Chappal
          </span>
        </Link>

        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link
            href="/products"
            className="text-vskc-charcoal hover:text-vskc-tan transition-colors"
          >
            Shop
          </Link>

          <Link
            href="/products?category=men"
            className="text-vskc-charcoal hover:text-vskc-tan transition-colors"
          >
            Men
          </Link>

          <Link
            href="/products?category=women"
            className="text-vskc-charcoal hover:text-vskc-tan transition-colors"
          >
            Women
          </Link>

          <Link
            href="/products?category=kids"
            className="text-vskc-charcoal hover:text-vskc-tan transition-colors"
          >
            Kids
          </Link>

          <Link
            href="/about"
            className="text-vskc-charcoal hover:text-vskc-tan transition-colors"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-vskc-charcoal hover:text-vskc-tan transition-colors"
          >
            Contact
          </Link>
        </nav>

        <Link
          href="/cart"
          className="text-sm font-medium text-vskc-charcoal hover:text-vskc-tan transition-colors"
        >
          Bag (0)
        </Link>
      </div>
    </header>
  );
}