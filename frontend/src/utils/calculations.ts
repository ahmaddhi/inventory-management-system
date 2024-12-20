import { Product } from '../types/product';

export function calculateTotalValue(products: Product[]): number {
  return products.reduce((sum, product) => sum + (product.price * product.stockQuantity), 0);
}

export function getLowStockItems(products: Product[]): Product[] {
  return products.filter(p => p.stockQuantity <= p.reorderPoint);
}

export function getProductsByCategory(products: Product[]): Record<string, number> {
  return products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}