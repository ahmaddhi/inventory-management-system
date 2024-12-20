import React, { useState } from 'react';
import { useSuppliers } from '../hooks/useSuppliers';
import { SupplierList } from '../components/suppliers/SupplierList';
import { SupplierForm } from '../components/suppliers/SupplierForm';
import { Supplier } from '../types/supplier';

export function SuppliersPage() {
  const { suppliers, loading, error, addSupplier } = useSuppliers();
  const [isFormOpen, setIsFormOpen] = useState(false);

  if (loading) return <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto" />;
  if (error) return <div className="text-red-600 p-4 bg-red-50 rounded-lg">{error.message}</div>;

  const handleSubmit = async (supplierData: Omit<Supplier, 'id'>) => {
    await addSupplier(supplierData);
    setIsFormOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Suppliers</h2>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          Add Supplier
        </button>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-medium mb-4">Add New Supplier</h3>
            <SupplierForm
              onSubmit={handleSubmit}
              onCancel={() => setIsFormOpen(false)}
            />
          </div>
        </div>
      )}

      <SupplierList suppliers={suppliers} />
    </div>
  );
}