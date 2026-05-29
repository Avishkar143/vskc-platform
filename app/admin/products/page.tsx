// app/admin/products/page.tsx
import Image from "next/image";
import Link from "next/link";
import { prisma } from "../../../src/lib/prisma";
import AdminHeader from "../../../src/components/AdminHeader";
import { deleteProduct } from "../actions";

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany({
    include: {
      category: true,
      images: true,
      variants: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen bg-vskc-white">
      <AdminHeader />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8 flex items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-vskc-tan font-semibold mb-3">
              Products
            </p>

            <h1 className="text-4xl font-serif text-vskc-espresso">
              Manage Products
            </h1>
          </div>

          <Link
            href="/admin/products/new"
            className="rounded-md bg-vskc-espresso px-5 py-3 text-sm font-semibold text-white hover:bg-vskc-charcoal"
          >
            Add Product
          </Link>
        </div>

        {products.length === 0 ? (
          <div className="rounded-lg border border-vskc-sand bg-vskc-sand/10 p-10 text-center">
            <p className="text-vskc-charcoal/70">No products added yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-lg border border-vskc-sand">
            <table className="w-full text-left text-sm">
              <thead className="bg-vskc-sand/20 text-vskc-espresso">
                <tr>
                  <th className="px-4 py-3">Image</th>
                  <th className="px-4 py-3">Product</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Variants</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                {products.map((product) => {
                  const primaryImage =
                    product.images.find((img) => img.isPrimary) ||
                    product.images[0];

                  return (
                    <tr
                      key={product.id}
                      className="border-t border-vskc-sand text-vskc-charcoal"
                    >
                      <td className="px-4 py-3">
                        <div className="relative h-16 w-16 overflow-hidden rounded-md bg-vskc-sand/20">
                          {primaryImage ? (
                            <Image
                              src={primaryImage.url}
                              alt={primaryImage.altText || product.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center text-[10px] text-vskc-charcoal/50">
                              No image
                            </div>
                          )}
                        </div>
                      </td>

                      <td className="px-4 py-3">
                        <p className="font-medium text-vskc-espresso">
                          {product.name}
                        </p>
                        <p className="text-xs text-vskc-charcoal/60">
                          /products/{product.slug}
                        </p>
                      </td>

                      <td className="px-4 py-3">
                        {product.category?.name || "-"}
                      </td>

                      <td className="px-4 py-3">
                        ₹{product.basePrice.toString()}
                      </td>

                      <td className="px-4 py-3">
                        {product.variants.length}
                      </td>

                      <td className="px-4 py-3">
                        {product.isActive ? (
                          <span className="text-green-700">Active</span>
                        ) : (
                          <span className="text-red-600">Inactive</span>
                        )}
                      </td>

                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <Link
                            href={`/admin/products/${product.id}/edit`}
                            className="text-vskc-tan hover:text-vskc-espresso"
                          >
                            Edit
                          </Link>

                          <form action={deleteProduct}>
                            <input
                              type="hidden"
                              name="id"
                              value={product.id}
                            />

                            <button
                              type="submit"
                              className="text-red-600 hover:text-red-800"
                            >
                              Delete
                            </button>
                          </form>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}