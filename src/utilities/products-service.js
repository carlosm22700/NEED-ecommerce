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
  // Adjust the URL to use the individual product's endpoint
  const url = `https://dummyjson.com/products/${id}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  const product = await response.json();

  if (!product) {
    throw new Error(`Failed to find product with id ${id}`);
  }

  return product;
}
