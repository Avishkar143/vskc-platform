// app/admin/actions.ts
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "../../src/lib/prisma";

function createSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function moneyToNumber(value: FormDataEntryValue | null) {
  return Number(String(value || "0"));
}

// CATEGORY ACTIONS

export async function createCategory(formData: FormData) {
  const name = String(formData.get("name") || "").trim();
  const parentId = String(formData.get("parentId") || "").trim();
  const slug = createSlug(name);

  if (!name) {
    throw new Error("Category name is required");
  }

  await prisma.category.create({
    data: {
      name,
      slug,
      parentId: parentId || null,
    },
  });

  revalidatePath("/admin/categories");
  revalidatePath("/products");
}

export async function deleteCategory(formData: FormData) {
  const id = String(formData.get("id") || "");

  if (!id) {
    throw new Error("Category ID is required");
  }

  await prisma.category.delete({
    where: {
      id,
    },
  });

  revalidatePath("/admin/categories");
  revalidatePath("/products");
}

// PRODUCT ACTIONS

export async function createProduct(formData: FormData) {
  const name = String(formData.get("name") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const basePrice = moneyToNumber(formData.get("basePrice"));
  const categoryId = String(formData.get("categoryId") || "").trim();
  const isGI_Tagged = formData.get("isGI_Tagged") === "on";
  const isActive = formData.get("isActive") === "on";
  const imageUrl = String(formData.get("imageUrl") || "").trim();
  const imageAltText = String(formData.get("imageAltText") || name).trim();
  const slug = createSlug(name);

  if (!name || !description || !basePrice || !categoryId) {
    throw new Error("Name, description, price, and category are required");
  }

  const product = await prisma.product.create({
    data: {
      name,
      slug,
      description,
      basePrice,
      categoryId,
      isGI_Tagged,
      isActive,
      images: imageUrl
        ? {
            create: {
              url: imageUrl,
              altText: imageAltText,
              isPrimary: true,
            },
          }
        : undefined,
    },
  });

  revalidatePath("/");
  revalidatePath("/products");
  revalidatePath("/admin/products");

  redirect(`/admin/products/${product.id}/edit`);
}

export async function updateProduct(formData: FormData) {
  const id = String(formData.get("id") || "").trim();
  const name = String(formData.get("name") || "").trim();
  const description = String(formData.get("description") || "").trim();
  const basePrice = moneyToNumber(formData.get("basePrice"));
  const categoryId = String(formData.get("categoryId") || "").trim();
  const isGI_Tagged = formData.get("isGI_Tagged") === "on";
  const isActive = formData.get("isActive") === "on";

  if (!id || !name || !description || !basePrice || !categoryId) {
    throw new Error("Product details are required");
  }

  await prisma.product.update({
    where: {
      id,
    },
    data: {
      name,
      description,
      basePrice,
      categoryId,
      isGI_Tagged,
      isActive,
    },
  });

  revalidatePath("/");
  revalidatePath("/products");
  revalidatePath("/admin/products");
  revalidatePath(`/admin/products/${id}/edit`);
}

export async function deleteProduct(formData: FormData) {
  const id = String(formData.get("id") || "").trim();

  if (!id) {
    throw new Error("Product ID is required");
  }

  await prisma.productImage.deleteMany({
    where: {
      productId: id,
    },
  });

  await prisma.productVariant.deleteMany({
    where: {
      productId: id,
    },
  });

  await prisma.product.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
  revalidatePath("/products");
  revalidatePath("/admin/products");
}

// IMAGE ACTIONS

export async function addProductImage(formData: FormData) {
  const productId = String(formData.get("productId") || "").trim();
  const url = String(formData.get("url") || "").trim();
  const altText = String(formData.get("altText") || "").trim();
  const isPrimary = formData.get("isPrimary") === "on";

  if (!productId || !url) {
    throw new Error("Product ID and image URL are required");
  }

  if (isPrimary) {
    await prisma.productImage.updateMany({
      where: {
        productId,
      },
      data: {
        isPrimary: false,
      },
    });
  }

  await prisma.productImage.create({
    data: {
      productId,
      url,
      altText,
      isPrimary,
    },
  });

  revalidatePath("/");
  revalidatePath("/products");
  revalidatePath("/admin/products");
  revalidatePath(`/admin/products/${productId}/edit`);
}

export async function setPrimaryImage(formData: FormData) {
  const imageId = String(formData.get("imageId") || "").trim();
  const productId = String(formData.get("productId") || "").trim();

  if (!imageId || !productId) {
    throw new Error("Image ID and product ID are required");
  }

  await prisma.productImage.updateMany({
    where: {
      productId,
    },
    data: {
      isPrimary: false,
    },
  });

  await prisma.productImage.update({
    where: {
      id: imageId,
    },
    data: {
      isPrimary: true,
    },
  });

  revalidatePath("/");
  revalidatePath("/products");
  revalidatePath(`/admin/products/${productId}/edit`);
}

export async function deleteProductImage(formData: FormData) {
  const id = String(formData.get("id") || "").trim();
  const productId = String(formData.get("productId") || "").trim();

  if (!id || !productId) {
    throw new Error("Image ID and product ID are required");
  }

  await prisma.productImage.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
  revalidatePath("/products");
  revalidatePath(`/admin/products/${productId}/edit`);
}

// VARIANT ACTIONS

export async function createVariant(formData: FormData) {
  const productId = String(formData.get("productId") || "").trim();
  const sku = String(formData.get("sku") || "").trim();
  const stock = Number(formData.get("stock") || 0);
  const price = moneyToNumber(formData.get("price"));
  const size = String(formData.get("size") || "").trim();
  const color = String(formData.get("color") || "").trim();
  const build = String(formData.get("build") || "").trim();

  if (!productId || !sku || !price || !size) {
    throw new Error("Product, SKU, price, and size are required");
  }

  await prisma.productVariant.create({
    data: {
      productId,
      sku,
      stock,
      price,
      attributes: {
        size,
        color,
        build,
      },
    },
  });

  revalidatePath("/");
  revalidatePath("/products");
  revalidatePath(`/admin/products/${productId}/edit`);
}

export async function deleteVariant(formData: FormData) {
  const id = String(formData.get("id") || "").trim();
  const productId = String(formData.get("productId") || "").trim();

  if (!id || !productId) {
    throw new Error("Variant ID and product ID are required");
  }

  await prisma.productVariant.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
  revalidatePath("/products");
  revalidatePath(`/admin/products/${productId}/edit`);
}