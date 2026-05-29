// app/admin/page.tsx
import Link from "next/link";
import { prisma } from "../../src/lib/prisma";
import AdminHeader from "../../src/components/AdminHeader";

export default async function AdminDashboardPage() {
  const [productCount, categoryCount, imageCount, variantCount] =
    await Promise.all([
      prisma.product.count(),
      prisma.category.count(),
      prisma.productImage.count(),
      prisma.productVariant.count(),
    ]);

  return (
    <div className="min-h-screen bg-vskc-white">
      <AdminHeader />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <p className="text-xs uppercase tracking-[0.25em] text-vskc-tan font-semibold mb-3">
          Dashboard
        </p>

        <h1 className="text-4xl font-serif text-vskc-espresso">
          Admin Dashboard
        </h1>

        <p className="mt-3 text-vskc-charcoal/70">
          Manage products, categories, images, variants, size, color, price, and
          stock from one place.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          <div className="rounded-lg border border-vskc-sand bg-vskc-sand/10 p-6">
            <p className="text-sm text-vskc-charcoal/70">Products</p>
            <h2 className="mt-2 text-4xl font-serif text-vskc-espresso">
              {productCount}
            </h2>
          </div>

          <div className="rounded-lg border border-vskc-sand bg-vskc-sand/10 p-6">
            <p className="text-sm text-vskc-charcoal/70">Categories</p>
            <h2 className="mt-2 text-4xl font-serif text-vskc-espresso">
              {categoryCount}
            </h2>
          </div>

          <div className="rounded-lg border border-vskc-sand bg-vskc-sand/10 p-6">
            <p className="text-sm text-vskc-charcoal/70">Images</p>
            <h2 className="mt-2 text-4xl font-serif text-vskc-espresso">
              {imageCount}
            </h2>
          </div>

          <div className="rounded-lg border border-vskc-sand bg-vskc-sand/10 p-6">
            <p className="text-sm text-vskc-charcoal/70">Variants</p>
            <h2 className="mt-2 text-4xl font-serif text-vskc-espresso">
              {variantCount}
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Link
            href="/admin/products/new"
            className="rounded-lg bg-vskc-espresso px-6 py-5 text-white hover:bg-vskc-charcoal"
          >
            Add New Product
          </Link>

          <Link
            href="/admin/products"
            className="rounded-lg border border-vskc-sand px-6 py-5 text-vskc-charcoal hover:border-vskc-tan"
          >
            Manage Products
          </Link>

          <Link
            href="/admin/categories"
            className="rounded-lg border border-vskc-sand px-6 py-5 text-vskc-charcoal hover:border-vskc-tan"
          >
            Manage Categories
          </Link>
        </div>
      </main>
    </div>
  );
}