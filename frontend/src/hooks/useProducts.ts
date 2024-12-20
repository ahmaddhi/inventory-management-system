import { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { initialProducts } from '../data/mockData';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      setLoading(true);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      setProducts(initialProducts);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load products'));
    } finally {
      setLoading(false);
    }
  }

  async function deleteProduct(id: string) {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      setProducts(products.filter(p => p.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to delete product'));
    }
  }

  async function addProduct(product: Omit<Product, 'id'>) {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      const newProduct = {
        ...product,
        id: Math.random().toString(36).substr(2, 9)
      };
      setProducts([...products, newProduct]);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to add product'));
    }
  }

  async function updateProduct(id: string, product: Partial<Product>) {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 300));
      setProducts(products.map(p => p.id === id ? { ...p, ...product } : p));
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to update product'));
    }
  }

  return {
    products,
    loading,
    error,
    deleteProduct,
    addProduct,
    updateProduct,
    refreshProducts: loadProducts
  };
}