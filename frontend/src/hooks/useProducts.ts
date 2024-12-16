import { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { initialProducts } from '../data/mockData';
import * as productService from '../services/productService';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // For now, we'll use mock data instead of making API calls
  // Later, this can be replaced with actual API calls
  async function loadProducts() {
    try {
      setLoading(true);
      // Simulate API call delay
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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 300));
      setProducts(products.filter(p => p.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to delete product'));
    }
  }

  return { products, loading, error, deleteProduct };
}