import React from 'react';

interface StockIndicatorProps {
  quantity: number;
  reorderPoint: number;
}

export function StockIndicator({ quantity, reorderPoint }: StockIndicatorProps) {
  const isLowStock = quantity <= reorderPoint;
  
  return (
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
      ${isLowStock ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
      {quantity} units
    </span>
  );
}