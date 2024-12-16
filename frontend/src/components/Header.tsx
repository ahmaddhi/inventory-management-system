import React from 'react';
import { LayoutDashboard } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-indigo-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <LayoutDashboard className="h-6 w-6" />
          <h1 className="text-xl font-bold">Inventory Manager Pro</h1>
        </div>
        <nav className="flex space-x-4">
          <a href="#dashboard" className="hover:text-indigo-200">Dashboard</a>
          <a href="#products" className="hover:text-indigo-200">Products</a>
          <a href="#suppliers" className="hover:text-indigo-200">Suppliers</a>
        </nav>
      </div>
    </header>
  );
}