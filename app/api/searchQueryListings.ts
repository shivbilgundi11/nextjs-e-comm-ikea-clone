import { productDetails } from './db/productDetails';

// Function to get listings by search query
export const getListingsBySearchQuery = (query: string) => {
  const lowerCaseQuery = query.toLocaleLowerCase();

  // Helper function to check if a field contains the query as a whole phrase
  const containsQuery = (field: string) => {
    return field.toLocaleLowerCase().includes(lowerCaseQuery);
  };

  // Filter products based on partial matches
  const partialMatches = productDetails.filter((prod) => {
    return (
      containsQuery(prod.prodName) ||
      containsQuery(prod.prodInfo) ||
      prod.tags.some((tag) => containsQuery(tag))
    );
  });

  // If partial matches are found, return them
  if (partialMatches.length > 0) {
    // Remove duplicates based on product ID
    const uniquePartialMatches = Array.from(
      new Map(partialMatches.map((product) => [product.id, product])).values(),
    );
    return uniquePartialMatches;
  }

  // If no partial matches, look for exact matches
  const exactMatches = productDetails.filter((prod) => {
    const exactMatchQuery = query.trim().toLocaleLowerCase();
    return (
      prod.prodName.toLocaleLowerCase() === exactMatchQuery ||
      prod.prodInfo.toLocaleLowerCase() === exactMatchQuery ||
      prod.tags.some((tag) => tag.toLocaleLowerCase() === exactMatchQuery)
    );
  });

  // Remove duplicates based on product ID
  const uniqueExactMatches = Array.from(
    new Map(exactMatches.map((product) => [product.id, product])).values(),
  );

  return uniqueExactMatches;
};
