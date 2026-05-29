// app/admin/categories/page.tsx
import { prisma } from "../../../src/lib/prisma";
import AdminHeader from "../../../src/components/AdminHeader";
import { createCategory, deleteCategory } from "../actions";

export default async function AdminCategoriesPage() {
  const categories = await prisma.category.findMany({
    include: {
      parent: true,
      _count: {
        select: {
          products: true,
          subCategories: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });

  return (
    <div className="min-h-screen bg-vskc-white">
      <AdminHeader />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-xs uppercase tracking-[0.25em] text-vskc-tan font-semibold mb-3">
          Categories
        </p>

        <h1 className="text-4xl font-serif text-vskc-espresso">
          Manage Categories
        </h1>

        <form
          action={createCategory}
          className="mt-10 mb-10 rounded-lg border border-vskc-sand p-6"
        >
          <div className="grid gap-5 md:grid-cols-[1fr_1fr_auto] md:items-end">
            <div>
              <label className="block text-sm font-medium text-vskc-charcoal mb-2">
                Category Name
              </label>
              <input
                name="name"
                type="text"
                required
                className="w-full rounded-md border border-vskc-sand px-4 py-3 outline-none focus:border-vskc-tan"
                placeholder="Men"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-vskc-charcoal mb-2">
                Parent Category
              </label>
              <select
                name="parentId"
                className="w-full rounded-md border border-vskc-sand px-4 py-3 outline-none focus:border-vskc-tan"
              >
                <option value="">No parent</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="rounded-md bg-vskc-espresso px-6 py-3 text-sm font-semibold text-white hover:bg-vskc-charcoal"
            >
              Add
            </button>
          </div>
        </form>

        <div className="overflow-hidden rounded-lg border border-vskc-sand">
          <table className="w-full text-left text-sm">
            <thead className="bg-vskc-sand/20 text-vskc-espresso">
              <tr>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Slug</th>
                <th className="px-4 py-3">Parent</th>
                <th className="px-4 py-3">Products</th>
                <th className="px-4 py-3">Sub Categories</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {categories.map((category) => {
                const isUsed =
                  category._count.products > 0 ||
                  category._count.subCategories > 0;

                return (
                  <tr
                    key={category.id}
                    className="border-t border-vskc-sand text-vskc-charcoal"
                  >
                    <td className="px-4 py-3 font-medium text-vskc-espresso">
                      {category.name}
                    </td>

                    <td className="px-4 py-3">{category.slug}</td>

                    <td className="px-4 py-3">
                      {category.parent?.name || "-"}
                    </td>

                    <td className="px-4 py-3">{category._count.products}</td>

                    <td className="px-4 py-3">
                      {category._count.subCategories}
                    </td>

                    <td className="px-4 py-3">
                      <form action={deleteCategory}>
                        <input type="hidden" name="id" value={category.id} />

                        <button
                          type="submit"
                          disabled={isUsed}
                          className={
                            isUsed
                              ? "text-vskc-charcoal/40"
                              : "text-red-600 hover:text-red-800"
                          }
                        >
                          {isUsed ? "Used" : "Delete"}
                        </button>
                      </form>
                    </td>
                  </tr>
                );
              })}

              {categories.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-8 text-center text-vskc-charcoal/60"
                  >
                    No categories yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}