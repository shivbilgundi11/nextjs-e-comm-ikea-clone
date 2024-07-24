import { productDetails } from './db/productDetails';

// Function to get listings by search query
export const getListingsByRoomType = (query: string) => {
  const lowerCaseQuery = query.toLocaleLowerCase();

  // Find products where prodName includes the query
  const prodNameMatches = productDetails.filter((prod) =>
    prod.prodName.toLocaleLowerCase().includes(lowerCaseQuery),
  );

  // Find products where prodInfo includes the query
  const prodInfoMatches = productDetails.filter((prod) =>
    prod.prodInfo.toLocaleLowerCase().includes(lowerCaseQuery),
  );

  // Find products where tags include the query
  const tagMatches = productDetails.filter((prod) =>
    prod.tags.some((tag) => tag.toLocaleLowerCase().includes(lowerCaseQuery)),
  );

  // Combine all matches into one array and remove duplicates based on product ID
  const allMatches = [...prodNameMatches, ...prodInfoMatches, ...tagMatches];

  // Remove duplicates using a Set (if needed)
  const uniqueListings = Array.from(
    new Set(allMatches.map((product) => product.id)),
  ).map((id) => {
    return allMatches.find((product) => product.id === id);
  });

  return uniqueListings;
};
