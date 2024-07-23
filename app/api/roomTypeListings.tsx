import { productDetails } from './db/productDetails';

export const getListingsByRoom = (roomType: string) => {
  const listings = productDetails.filter((prod) => {
    return prod.tags.some((tag) => {
      return tag.toLocaleLowerCase() === roomType.toLocaleLowerCase();
    });
  });

  return listings;
};
