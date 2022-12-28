export interface productInfo {
  [key: string]: string | number | Array<number> | Array<string>;
  id: number;
  brand: string;
  categray: string;
  title: string;
  description: string;
  discountPercentage: number;
  images: Array<string>;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
}
