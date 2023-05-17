export async function getProducts(limit = 9, skip = 0, category = "") {
  const response = await fetch("https://dummyjson.com/products");
  if (!response.ok) throw new Error("Failed to fetch products");
  const data = await response.json();
  return data.products;
}
