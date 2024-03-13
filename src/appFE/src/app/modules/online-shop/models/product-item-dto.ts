export interface ProductStatsDataDTO {
  numberOfProducts: number;
  category: string;
}

export interface StoreDTO {
  name: string;
  category: string;
  employees: [string];
}
export interface ProductItemDTO {
  title: string;
  category: string;
  price: number;
  employee?: string;
  description: string;
  reviews?: [string];
}
export interface ShopPayload<T> {
  id: string;
  data:T;
}
