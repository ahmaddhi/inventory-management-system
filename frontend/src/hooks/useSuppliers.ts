import { useState, useEffect } from 'react';
import { Supplier } from '../types/supplier';
import { initialSuppliers } from '../data/mockData';

export function useSuppliers() {
  const [suppliers, setSuppliers] = useState<Supplier[]>(initialSuppliers);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  return { suppliers, loading, error };
}