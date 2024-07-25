import { productDetails } from "./db/productDetails";

export const getProductById = (id: string) => {
  const product = productDetails.find((prod) => prod.id === id);

  if (!product) {
    return null;
  }

  return productDetails.find((prod) => prod.id === id);
};
