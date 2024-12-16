import { Product } from '../types/product';
import * as api from './api';

export async function getProducts(): Promise<Product[]> {
  return api.get<Product[]>('/products');
}

export async function getProduct(id: string): Promise<Product> {
  return api.get<Product>(`/products/${id}`);
}

export async function createProduct(product: Omit<Product, 'id'>): Promise<Product> {
  return api.post<Product>('/products', product);
}

export async function updateProduct(id: string, product: Partial<Product>): Promise<Product> {
  return api.put<Product>(`/products/${id}`, product);
}

export async function deleteProduct(id: string): Promise<void> {
  return api.remove(`/products/${id}`);
}