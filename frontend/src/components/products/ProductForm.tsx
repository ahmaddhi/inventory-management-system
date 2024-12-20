import React, { useState } from 'react';
import { Product } from '../../types/product';
import { Dropdown } from '../shared/Dropdown';
import { useSuppliers } from '../../hooks/useSuppliers';

interface ProductFormProps {
  initialProduct?: Product;
  onSubmit: (product: Omit<Product, 'id'>) => void;
  onCancel: () => void;
}

export function ProductForm({ initialProduct, onSubmit, onCancel }: ProductFormProps) {
  const { suppliers } = useSuppliers();
  const [formData, setFormData] = useState({
    name: initialProduct?.name || '',
    category: initialProduct?.category || '',
    price: initialProduct?.price || 0,
    stockQuantity: initialProduct?.stockQuantity || 0,
    supplier: initialProduct?.supplier || '',
    reorderPoint: initialProduct?.reorderPoint || 0,
  });

  // Get unique categories from existing products
  const existingCategories = Array.from(new Set(['Electronics', 'Accessories', 'Peripherals']));
  const supplierNames = suppliers.map(s => s.name);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
        />
      </div>

      <Dropdown
        label="Category"
        value={formData.category}
        options={existingCategories}
        onChange={(value) => setFormData({ ...formData, category: value })}
        required
      />

      <Dropdown
        label="Supplier"
        value={formData.supplier}
        options={supplierNames}
        onChange={(value) => setFormData({ ...formData, supplier: value })}
        required
      />

      <div>
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
          min="0"
          step="0.01"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Stock Quantity</label>
        <input
          type="number"
          value={formData.stockQuantity}
          onChange={(e) => setFormData({ ...formData, stockQuantity: parseInt(e.target.value) })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
          min="0"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Reorder Point</label>
        <input
          type="number"
          value={formData.reorderPoint}
          onChange={(e) => setFormData({ ...formData, reorderPoint: parseInt(e.target.value) })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          required
          min="0"
        />
        <p className="mt-1 text-sm text-gray-500">
          Set the minimum stock level at which to reorder this product
        </p>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          {initialProduct ? 'Update' : 'Add'} Product
        </button>
      </div>
    </form>
  );
}