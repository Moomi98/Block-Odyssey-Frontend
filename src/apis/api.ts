const BASE_URL = "https://dummyjson.com";

const urls = {
  products: "/products?limit=",
};

export const fetchProducts = async (limit?: number) => {
  const products = await fetch(BASE_URL + urls.products + (limit || 100));
  return products.json();
};
