import { Product } from '../types/product';
import { API_CONFIG } from '../config/api.config';
import * as api from './api';

export async function getProducts(): Promise<Product[]> {
  return api.get<Product[]>(API_CONFIG.ENDPOINTS.PRODUCTS);
}

export async function getProduct(id: string): Promise<Product> {
  return api.get<Product>(`${API_CONFIG.ENDPOINTS.PRODUCTS}/${id}`);
}

export async function createProduct(product: Omit<Product, 'id'>): Promise<Product> {
  return api.post<Product>(API_CONFIG.ENDPOINTS.PRODUCTS, product);
}

export async function updateProduct(id: string, product: Partial<Product>): Promise<Product> {
  return api.put<Product>(`${API_CONFIG.ENDPOINTS.PRODUCTS}/${id}`, product);
}

export async function deleteProduct(id: string): Promise<void> {
  return api.remove(`${API_CONFIG.ENDPOINTS.PRODUCTS}/${id}`);
}