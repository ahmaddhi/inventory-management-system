import React from 'react';
import { Package } from 'lucide-react';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center mb-4">
        <Package className="h-6 w-6 text-gray-400 mr-2" />
        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-gray-500">Category: {product.category}</p>
        <p className="text-sm text-gray-500">Price: ${product.price.toFixed(2)}</p>
        <p className="text-sm text-gray-500">Stock: {product.stockQuantity}</p>
      </div>
    </div>
  );
}