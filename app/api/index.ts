import axios, { AxiosRequestConfig } from "axios";
import MockAdapter from "axios-mock-adapter";

import { bedAndMatressesListings } from "./db/bed&matress";
import { decorationsListings } from "./db/decorations";
import { furnitureListings } from "./db/furnitures";
import { lightingProductsListings } from "./db/lighting";
import { newLowePriceListings } from "./db/newLowPriceListings";
import { storageAndOrganisationListings } from "./db/storage&Organ";
import { getListingsByRoomType } from "./roomTypeListings";
import { getListingsBySearchQuery } from "./searchQueryListings";
import { getProductById } from "./singleProduct";

// Creates a base axios instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

// Creates a mock adapter for axios
const adapter = new MockAdapter(api, { delayResponse: 1000 });

// Gets all listings of New Lower Price.
adapter.onGet("/api/listings/new-lower-price").reply(200, newLowePriceListings);

// Gets all listings of Storage And Oraganisation.
adapter
  .onGet("/api/listings/storage-and-organisations")
  .reply(200, storageAndOrganisationListings);

// Gets all listings of Furnitures.
adapter.onGet("/api/listings/furnitures").reply(200, furnitureListings);

// Gets all listings of Decorations.
adapter.onGet("/api/listings/decoration-items").reply(200, decorationsListings);

// Gets all listings of Lighting Products.
adapter
  .onGet("/api/listings/lighting-items")
  .reply(200, lightingProductsListings);

// Gets all listings of Bed & Matresses.
adapter
  .onGet("/api/listings/bed-and-matresses")
  .reply(200, bedAndMatressesListings);

// Get product detail by id.
adapter.onGet(/\/api\/p\/[a-zA-Z0-9_&-]+$/).reply(function (
  config: AxiosRequestConfig,
) {
  const idMatch =
    config.url && config.url.match(/\/api\/p\/([a-zA-Z0-9_&-]+)$/);
  const id = idMatch && idMatch[1];

  const productDetail = id && getProductById(id);

  if (!productDetail) {
    return [404, { error: "Product not found" }];
  }

  return [200, productDetail];
});

// Get products listings based on room.
adapter.onGet(/\/api\/rooms\/([a-zA-Z0-9_&-]+)$/).reply(function (
  config: AxiosRequestConfig,
) {
  const roomIdMatch =
    config.url && config.url.match(/\/api\/rooms\/([a-zA-Z0-9_&-]+)$/);
  const roomType = roomIdMatch && roomIdMatch[1];

  const listings = roomType && getListingsByRoomType(roomType);

  if (!listings || listings.length === 0) {
    return [404, { error: `No Products found for ${roomType}` }];
  }

  return [200, listings];
});

// Get products listings based on search query.
adapter.onGet(/\/api\/search\/(.+)$/).reply(function (
  config: AxiosRequestConfig,
) {
  // Extract the query from the URL and decode it
  const searchQueryMatch = config.url?.match(/\/api\/search\/(.+)$/);
  const query = searchQueryMatch ? decodeURIComponent(searchQueryMatch[1]) : "";

  // Fetch listings based on the query
  const listings = query ? getListingsBySearchQuery(query) : [];

  // Return 404 if no listings are found
  if (listings.length === 0) {
    return [404, { error: `No Products found for ${query}` }];
  }

  // Return listings with a 200 status
  return [200, listings];
});

export default api;
