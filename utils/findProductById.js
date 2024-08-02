import allProducts from "@/data/prodacts.json";

export const findProductById = (id) => {
  const findProduct = allProducts.products?.find(
    (product) => product?.id === +id
  );
  return findProduct;
};

export const getAllCategory = () => {
  const getCategories = allProducts.products?.reduce((prev, curr) => {
    if (!prev.includes(curr.category)) {
      return [...prev, curr.category];
    }
    return prev;
  }, []);

  return getCategories;
};

export const getProductsByCategories = (categoryName) => {
  if (categoryName === "all") {
    return allProducts.products;
  }
  return allProducts.products.filter(
    (product) => product.category === categoryName
  );
};
