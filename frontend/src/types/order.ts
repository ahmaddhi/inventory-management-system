export interface Order {
  id: string;
  productId: string;
  quantity: number;
  orderDate: string;
  status: 'pending' | 'completed' | 'cancelled';
  totalPrice: number;
}