export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stockQuantity: number;
  supplier: string;
  reorderPoint: number;
}

export interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface StockAlert {
  productId: string;
  productName: string;
  currentStock: number;
  reorderPoint: number;
}