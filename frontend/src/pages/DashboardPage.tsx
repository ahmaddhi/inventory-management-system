import React from 'react';
import { Dashboard } from '../components/Dashboard';
import { ProductTable } from '../components/products/ProductTable';
import { useProducts } from '../hooks/useProducts';
import { useSuppliers } from '../hooks/useSuppliers';

export function DashboardPage() {
  const { products, loading, error, deleteProduct } = useProducts();
  const { suppliers } = useSuppliers();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600 p-4 bg-red-50 rounded-lg">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Dashboard products={products} suppliers={suppliers} />
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Product Inventory</h2>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            Add Product
          </button>
        </div>
        <ProductTable
          products={products}
          onEdit={(product) => console.log('Edit:', product)}
          onDelete={deleteProduct}
        />
      </div>
    </div>
  );
}