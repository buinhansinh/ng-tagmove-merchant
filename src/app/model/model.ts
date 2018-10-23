export interface ProductStatistics {
  sales: number;
  offers: number;
  products: number;
  customers: number;
}

export interface Product {
  id: string;
  productName: string;
  price: number;
  sales: number;
  offers: number;
  img: string;
}

export interface Offer {
  id: number;
  price: string;
}
