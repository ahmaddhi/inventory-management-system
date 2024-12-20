import { useState, useEffect } from 'react';
import { Supplier } from '../types/supplier';
import { initialSuppliers } from '../data/mockData';

export function useSuppliers() {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    loadSuppliers();
  }, []);

  async function loadSuppliers() {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      setSuppliers(initialSuppliers);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load suppliers'));
    } finally {
      setLoading(false);
    }
  }

  async function addSupplier(supplier: Omit<Supplier, 'id'>) {
    try {
      const newSupplier = {
        ...supplier,
        id: Math.random().toString(36).substr(2, 9)
      };
      setSuppliers([...suppliers, newSupplier]);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to add supplier'));
    }
  }

  return { suppliers, loading, error, addSupplier };
}