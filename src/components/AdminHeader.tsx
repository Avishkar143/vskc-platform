// src/components/AdminHeader.tsx
import Image from "next/image";
import Link from "next/link";

export default function AdminHeader() {
  return (
    <header className="border-b border-vskc-sand bg-vskc-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/admin" className="flex items-center gap-3">
          <Image
            src="/vskc-logo.png"
            alt="VSKC Admin - Vijay Shinde Kolhapuri Chappal"
            width={150}
            height={65}
            priority
            className="h-11 w-auto object-contain"
          />
          <span className="text-sm font-semibold tracking-wide text-vskc-charcoal">
            Admin
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link
            href="/admin/products"
            className="text-vskc-charcoal hover:text-vskc-tan"
          >
            Products
          </Link>

          <Link
            href="/admin/products/new"
            className="text-vskc-charcoal hover:text-vskc-tan"
          >
            Add Product
          </Link>

          <Link
            href="/admin/categories"
            className="text-vskc-charcoal hover:text-vskc-tan"
          >
            Categories
          </Link>

          <Link href="/" className="text-vskc-charcoal hover:text-vskc-tan">
            View Store
          </Link>
        </nav>
      </div>
    </header>
  );
}