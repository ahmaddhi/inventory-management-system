import { Product } from '../types/product';

export function calculateReorderPoint(
  averageDailySales: number,
  leadTimeDays: number,
  safetyStockDays: number = 7
): number {
  const basePoint = Math.ceil(averageDailySales * leadTimeDays);
  const safetyStock = Math.ceil(averageDailySales * safetyStockDays);
  return basePoint + safetyStock;
}

export function validateStockLevels(product: Product): {
  isLowStock: boolean;
  isDepleted: boolean;
  stockStatus: 'critical' | 'low' | 'normal' | 'optimal';
} {
  const isLowStock = product.stockQuantity <= product.reorderPoint;
  const isDepleted = product.stockQuantity === 0;
  
  let stockStatus: 'critical' | 'low' | 'normal' | 'optimal';
  if (isDepleted) {
    stockStatus = 'critical';
  } else if (isLowStock) {
    stockStatus = 'low';
  } else if (product.stockQuantity <= product.reorderPoint * 2) {
    stockStatus = 'normal';
  } else {
    stockStatus = 'optimal';
  }

  return { isLowStock, isDepleted, stockStatus };
}

export function calculateOptimalOrderQuantity(
  product: Product,
  annualDemand: number,
  orderingCost: number,
  holdingCost: number
): number {
  // Economic Order Quantity (EOQ) formula
  const eoq = Math.sqrt((2 * annualDemand * orderingCost) / (holdingCost * product.price));
  return Math.ceil(eoq);
}