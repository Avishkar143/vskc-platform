// app/admin/products/new/page.tsx
import { prisma } from "../../../../src/lib/prisma";
import AdminHeader from "../../../../src/components/AdminHeader";
import { createProduct } from "../../actions";

export default async function NewProductPage() {
  const categories = await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return (
    <div className="min-h-screen bg-vskc-white">
      <AdminHeader />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <p className="text-xs uppercase tracking-[0.25em] text-vskc-tan font-semibold mb-3">
          New Product
        </p>

        <h1 className="text-4xl font-serif text-vskc-espresso">Add Product</h1>

        <form
          action={createProduct}
          className="mt-10 rounded-lg border border-vskc-sand p-6"
        >
          <div className="grid gap-5">
            <div>
              <label className="block text-sm font-medium text-vskc-charcoal mb-2">
                Product Name
              </label>
              <input
                name="name"
                type="text"
                required
                className="w-full rounded-md border border-vskc-sand px-4 py-3 outline-none focus:border-vskc-tan"
                placeholder="Classic Brown Kolhapuri"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-vskc-charcoal mb-2">
                Description
              </label>
              <textarea
                name="description"
                required
                className="min-h-28 w-full rounded-md border border-vskc-sand px-4 py-3 outline-none focus:border-vskc-tan"
                placeholder="Product details..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-vskc-charcoal mb-2">
                Base Price
              </label>
              <input
                name="basePrice"
                type="number"
                step="0.01"
                required
                className="w-full rounded-md border border-vskc-sand px-4 py-3 outline-none focus:border-vskc-tan"
                placeholder="1499"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-vskc-charcoal mb-2">
                Category
              </label>
              <select
                name="categoryId"
                required
                className="w-full rounded-md border border-vskc-sand px-4 py-3 outline-none focus:border-vskc-tan"
              >
                <option value="">Select category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              {categories.length === 0 && (
                <p className="mt-2 text-sm text-red-600">
                  Add a category first from Admin → Categories.
                </p>
              )}
            </div>

            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-sm text-vskc-charcoal">
                <input name="isGI_Tagged" type="checkbox" defaultChecked />
                GI Tagged
              </label>

              <label className="flex items-center gap-2 text-sm text-vskc-charcoal">
                <input name="isActive" type="checkbox" defaultChecked />
                Active
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-vskc-charcoal mb-2">
                Primary Image URL
              </label>
              <input
                name="imageUrl"
                type="text"
                className="w-full rounded-md border border-vskc-sand px-4 py-3 outline-none focus:border-vskc-tan"
                placeholder="/products/classic-brown.jpg"
              />
              <p className="mt-2 text-xs text-vskc-charcoal/60">
                For now, paste image URL. Later we will add real upload using
                Supabase Storage.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-vskc-charcoal mb-2">
                Image Alt Text
              </label>
              <input
                name="imageAltText"
                type="text"
                className="w-full rounded-md border border-vskc-sand px-4 py-3 outline-none focus:border-vskc-tan"
                placeholder="Brown handmade Kolhapuri chappal"
              />
            </div>

            <button
              type="submit"
              className="rounded-md bg-vskc-espresso px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white hover:bg-vskc-charcoal"
            >
              Create Product
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}