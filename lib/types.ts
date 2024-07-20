export interface SingleProductType {
  id: string;
  img1: string;
  img2: string;
  prodName: string;
  prodInfo: string;
  price: number;
  prevPrice: number;
  rating: number;
  ratings: number;
  tags: string[];
}

interface ProductVariant {
  id: number;
  variantType: string;
  images: string[];
}

export interface ProductDetailType {
  id: string;
  img1: string;
  img2: string;
  prodName: string;
  prodInfo: string;
  price: number;
  prevPrice: number;
  rating: number;
  ratings: number;
  tags: string[];
  useDesc: string;
  articleNum: string;
  prodDetails: string;
  designer: string;
  countryOfOrigin: string;
  hasVariety: boolean;
  varietyType: string;
  varieties: ProductVariant[];
}
