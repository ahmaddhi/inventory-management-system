import { Product, Supplier } from '../types';

export const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Laptop Pro X1',
    category: 'Electronics',
    price: 1299.99,
    stockQuantity: 15,
    supplier: 'TechCorp Inc',
    reorderPoint: 5
  },
  {
    id: '2',
    name: 'Wireless Mouse M1',
    category: 'Accessories',
    price: 49.99,
    stockQuantity: 50,
    supplier: 'TechCorp Inc',
    reorderPoint: 10
  },
  {
    id: '3',
    name: 'HD Monitor 27"',
    category: 'Electronics',
    price: 299.99,
    stockQuantity: 8,
    supplier: 'DisplayTech Ltd',
    reorderPoint: 3
  }
];

export const initialSuppliers: Supplier[] = [
  {
    id: '1',
    name: 'TechCorp Inc',
    email: 'contact@techcorp.com',
    phone: '(555) 123-4567',
    address: '123 Tech Street, Silicon Valley, CA'
  },
  {
    id: '2',
    name: 'DisplayTech Ltd',
    email: 'sales@displaytech.com',
    phone: '(555) 987-6543',
    address: '456 Display Road, San Jose, CA'
  }
];