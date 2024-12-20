import React from 'react';
import { Dashboard } from '../components/Dashboard';
import { useProducts } from '../hooks/useProducts';
import { useSuppliers } from '../hooks/useSuppliers';

export function DashboardPage() {
  const { products, loading: productsLoading, error: productsError } = useProducts();
  const { suppliers, loading: suppliersLoading, error: suppliersError } = useSuppliers();

  if (productsLoading || suppliersLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (productsError || suppliersError) {
    return (
      <div className="text-red-600 p-4 bg-red-50 rounded-lg">
        Error: {productsError?.message || suppliersError?.message}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
      <Dashboard products={products} suppliers={suppliers} />
    </div>
  );
}