export async function getProducts(category, limit, skip, searchTerm) {
  let url = "https://dummyjson.com/products";
  if (category) {
    url += `/category/${category}`;
  }
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  let data = await response.json();

  // Filter products based on the search term
  if (searchTerm) {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    data.products = data.products.filter((product) =>
      product.title.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }

  // Apply pagination
  data.products = data.products.slice(skip, skip + limit);

  return { products: data.products };
}

export async function getCategories() {
  const response = await fetch("https://dummyjson.com/products/categories");
  if (!response.ok) throw new Error("Failed to fetch categories");
  const data = await response.json();
  return data;
}

export async function getProductById(id) {
  const url = "https://dummyjson.com/products";
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  let data = await response.json();

  // Find the product with the matching id
  const product = data.products.find((product) => product.id === Number(id));
  if (!product) {
    throw new Error(`Failed to find product with id ${id}`);
  }

  return product;
}
