import React from 'react';
import { Package, Users, AlertTriangle, TrendingUp } from 'lucide-react';
import { Product, Supplier } from '../types';

interface DashboardProps {
  products: Product[];
  suppliers: Supplier[];
}

export function Dashboard({ products, suppliers }: DashboardProps) {
  const totalProducts = products.length;
  const totalSuppliers = suppliers.length;
  const lowStockItems = products.filter(p => p.stockQuantity <= p.reorderPoint);
  const totalValue = products.reduce((sum, product) => sum + (product.price * product.stockQuantity), 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center">
          <Package className="h-8 w-8 text-blue-500" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Total Products</p>
            <p className="text-2xl font-semibold text-gray-900">{totalProducts}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center">
          <Users className="h-8 w-8 text-green-500" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Total Suppliers</p>
            <p className="text-2xl font-semibold text-gray-900">{totalSuppliers}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center">
          <AlertTriangle className="h-8 w-8 text-red-500" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Low Stock Items</p>
            <p className="text-2xl font-semibold text-gray-900">{lowStockItems.length}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center">
          <TrendingUp className="h-8 w-8 text-purple-500" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Total Inventory Value</p>
            <p className="text-2xl font-semibold text-gray-900">${totalValue.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}