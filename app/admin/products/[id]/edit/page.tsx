// app/admin/products/[id]/edit/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "../../../../../src/lib/prisma";
import AdminHeader from "../../../../../src/components/AdminHeader";
import {
  addProductImage,
  createVariant,
  deleteProductImage,
  deleteVariant,
  setPrimaryImage,
  updateProduct,
} from "../../../actions";

type EditProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

type VariantAttributes = {
  size?: string;
  color?: string;
  build?: string;
};

export default async function EditProductPage({ params }: EditProductPageProps) {
  const resolvedParams = await params;

  const [product, categories] = await Promise.all([
    prisma.product.findUnique({
      where: {
        id: resolvedParams.id,
      },
      include: {
        category: true,
        images: true,
        variants: {
          orderBy: {
            sku: "asc",
          },
        },
      },
    }),
    prisma.category.findMany({
      orderBy: {
        name: "asc",
      },
    }),
  ]);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-vskc-white">
      <AdminHeader />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8 flex items-center justify-between gap-6">
          <div>
            <Link
              href="/admin/products"
              className="text-sm text-vskc-charcoal/70 hover:text-vskc-tan"
            >
              ← Back to products
            </Link>

            <h1 className="mt-3 text-4xl font-serif text-vskc-espresso">
              Edit Product
            </h1>

            <p className="mt-2 text-vskc-charcoal/70">{product.name}</p>
          </div>

          <Link
            href={`/products/${product.slug}`}
            className="rounded-md border border-vskc-sand px-5 py-3 text-sm text-vskc-charcoal hover:border-vskc-tan"
          >
            View Product
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-lg border border-vskc-sand p-6">
            <h2 className="text-2xl font-serif text-vskc-espresso">
              Product Details
            </h2>

            <form action={updateProduct} className="mt-6 grid gap-5">
              <input type="hidden" name="id" value={product.id} />

              <div>
                <label className="block text-sm font-medium text-vskc-charcoal mb-2">
                  Product Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  defaultValue={product.name}
                  className="w-full rounded-md border border-vskc-sand px-4 py-3 outline-none focus:border-vskc-tan"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-vskc-charcoal mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  required
                  defaultValue={product.description}
                  className="min-h-32 w-full rounded-md border border-vskc-sand px-4 py-3 outline-none focus:border-vskc-tan"
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
                  defaultValue={product.basePrice.toString()}
                  className="w-full rounded-md border border-vskc-sand px-4 py-3 outline-none focus:border-vskc-tan"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-vskc-charcoal mb-2">
                  Category
                </label>
                <select
                  name="categoryId"
                  required
                  defaultValue={product.categoryId}
                  className="w-full rounded-md border border-vskc-sand px-4 py-3 outline-none focus:border-vskc-tan"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-6">
                <label className="flex items-center gap-2 text-sm text-vskc-charcoal">
                  <input
                    name="isGI_Tagged"
                    type="checkbox"
                    defaultChecked={product.isGI_Tagged}
                  />
                  GI Tagged
                </label>

                <label className="flex items-center gap-2 text-sm text-vskc-charcoal">
                  <input
                    name="isActive"
                    type="checkbox"
                    defaultChecked={product.isActive}
                  />
                  Active
                </label>
              </div>

              <button
                type="submit"
                className="rounded-md bg-vskc-espresso px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white hover:bg-vskc-charcoal"
              >
                Save Product
              </button>
            </form>
          </section>

          <section className="rounded-lg border border-vskc-sand p-6">
            <h2 className="text-2xl font-serif text-vskc-espresso">
              Add Image
            </h2>

            <form action={addProductImage} className="mt-6 grid gap-4">
              <input type="hidden" name="productId" value={product.id} />

              <input
                name="url"
                type="text"
                required
                placeholder="/products/image-name.jpg"
                className="w-full rounded-md border border-vskc-sand px-4 py-3 outline-none focus:border-vskc-tan"
              />

              <input
                name="altText"
                type="text"
                placeholder="Image alt text"
                className="w-full rounded-md border border-vskc-sand px-4 py-3 outline-none focus:border-vskc-tan"
              />

              <label className="flex items-center gap-2 text-sm text-vskc-charcoal">
                <input name="isPrimary" type="checkbox" />
                Make primary image
              </label>

              <button
                type="submit"
                className="rounded-md bg-vskc-espresso px-5 py-3 text-sm font-semibold text-white hover:bg-vskc-charcoal"
              >
                Add Image
              </button>
            </form>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {product.images.map((image) => (
                <div
                  key={image.id}
                  className="rounded-md border border-vskc-sand p-3"
                >
                  <div className="relative aspect-square overflow-hidden rounded-md bg-vskc-sand/20">
                    <Image
                      src={image.url}
                      alt={image.altText || product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <p className="mt-2 text-xs text-vskc-charcoal/60 break-all">
                    {image.url}
                  </p>

                  {image.isPrimary && (
                    <p className="mt-2 text-xs font-medium text-green-700">
                      Primary
                    </p>
                  )}

                  <div className="mt-3 flex gap-3">
                    {!image.isPrimary && (
                      <form action={setPrimaryImage}>
                        <input
                          type="hidden"
                          name="imageId"
                          value={image.id}
                        />
                        <input
                          type="hidden"
                          name="productId"
                          value={product.id}
                        />

                        <button
                          type="submit"
                          className="text-xs text-vskc-tan hover:text-vskc-espresso"
                        >
                          Set primary
                        </button>
                      </form>
                    )}

                    <form action={deleteProductImage}>
                      <input type="hidden" name="id" value={image.id} />
                      <input
                        type="hidden"
                        name="productId"
                        value={product.id}
                      />

                      <button
                        type="submit"
                        className="text-xs text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                </div>
              ))}

              {product.images.length === 0 && (
                <p className="text-sm text-vskc-charcoal/60">
                  No images added yet.
                </p>
              )}
            </div>
          </section>
        </div>

        <section className="mt-10 rounded-lg border border-vskc-sand p-6">
          <h2 className="text-2xl font-serif text-vskc-espresso">
            Product Variants
          </h2>

          <p className="mt-2 text-sm text-vskc-charcoal/70">
            Add sizes, colors, build type, price, SKU, and stock. This data will
            also be used later in the mobile app.
          </p>

          <form
            action={createVariant}
            className="mt-6 grid gap-4 md:grid-cols-6 md:items-end"
          >
            <input type="hidden" name="productId" value={product.id} />

            <div>
              <label className="block text-xs font-medium text-vskc-charcoal mb-2">
                Size
              </label>
              <input
                name="size"
                type="text"
                required
                placeholder="UK 8"
                className="w-full rounded-md border border-vskc-sand px-3 py-3 outline-none focus:border-vskc-tan"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-vskc-charcoal mb-2">
                Color
              </label>
              <input
                name="color"
                type="text"
                placeholder="Tan"
                className="w-full rounded-md border border-vskc-sand px-3 py-3 outline-none focus:border-vskc-tan"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-vskc-charcoal mb-2">
                Build
              </label>
              <input
                name="build"
                type="text"
                placeholder="Paper Kapshi"
                className="w-full rounded-md border border-vskc-sand px-3 py-3 outline-none focus:border-vskc-tan"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-vskc-charcoal mb-2">
                SKU
              </label>
              <input
                name="sku"
                type="text"
                required
                placeholder="VSKC-BRN-8"
                className="w-full rounded-md border border-vskc-sand px-3 py-3 outline-none focus:border-vskc-tan"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-vskc-charcoal mb-2">
                Stock
              </label>
              <input
                name="stock"
                type="number"
                required
                defaultValue={0}
                className="w-full rounded-md border border-vskc-sand px-3 py-3 outline-none focus:border-vskc-tan"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-vskc-charcoal mb-2">
                Price
              </label>
              <input
                name="price"
                type="number"
                step="0.01"
                required
                defaultValue={product.basePrice.toString()}
                className="w-full rounded-md border border-vskc-sand px-3 py-3 outline-none focus:border-vskc-tan"
              />
            </div>

            <button
              type="submit"
              className="md:col-span-6 rounded-md bg-vskc-espresso px-5 py-3 text-sm font-semibold text-white hover:bg-vskc-charcoal"
            >
              Add Variant
            </button>
          </form>

          <div className="mt-8 overflow-x-auto rounded-lg border border-vskc-sand">
            <table className="w-full text-left text-sm">
              <thead className="bg-vskc-sand/20 text-vskc-espresso">
                <tr>
                  <th className="px-4 py-3">Size</th>
                  <th className="px-4 py-3">Color</th>
                  <th className="px-4 py-3">Build</th>
                  <th className="px-4 py-3">SKU</th>
                  <th className="px-4 py-3">Stock</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {product.variants.map((variant) => {
                  const attributes =
                    variant.attributes as VariantAttributes | null;

                  return (
                    <tr
                      key={variant.id}
                      className="border-t border-vskc-sand text-vskc-charcoal"
                    >
                      <td className="px-4 py-3">
                        {attributes?.size || "-"}
                      </td>

                      <td className="px-4 py-3">
                        {attributes?.color || "-"}
                      </td>

                      <td className="px-4 py-3">
                        {attributes?.build || "-"}
                      </td>

                      <td className="px-4 py-3">{variant.sku}</td>

                      <td className="px-4 py-3">{variant.stock}</td>

                      <td className="px-4 py-3">
                        ₹{variant.price.toString()}
                      </td>

                      <td className="px-4 py-3">
                        <form action={deleteVariant}>
                          <input type="hidden" name="id" value={variant.id} />
                          <input
                            type="hidden"
                            name="productId"
                            value={product.id}
                          />

                          <button
                            type="submit"
                            className="text-red-600 hover:text-red-800"
                          >
                            Delete
                          </button>
                        </form>
                      </td>
                    </tr>
                  );
                })}

                {product.variants.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-4 py-8 text-center text-vskc-charcoal/60"
                    >
                      No variants added yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}