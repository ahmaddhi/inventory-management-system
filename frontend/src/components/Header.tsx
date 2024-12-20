import React, { useState, useEffect } from 'react';
import { LayoutDashboard } from 'lucide-react';
import { navigateTo } from '../routes';

type Page = 'dashboard' | 'products' | 'suppliers';

export function Header() {
  const [activePage, setActivePage] = useState<Page>('dashboard');

  useEffect(() => {
    const handlePageChange = (e: CustomEvent<Page>) => {
      setActivePage(e.detail);
    };

    // Add event listener
    window.addEventListener('pageChange', handlePageChange as EventListener);

    // Clean up
    return () => {
      window.removeEventListener('pageChange', handlePageChange as EventListener);
    };
  }, []);

  const handleNavigation = (page: Page) => {
    navigateTo(page);
    setActivePage(page);
  };

  return (
    <header className="bg-indigo-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <LayoutDashboard className="h-6 w-6" />
          <h1 className="text-xl font-bold">Inventory Manager Pro</h1>
        </div>
        <nav className="flex space-x-4">
          <button
            onClick={() => handleNavigation('dashboard')}
            className={`px-3 py-2 rounded-md transition-colors ${
              activePage === 'dashboard'
                ? 'bg-indigo-700 text-white'
                : 'text-indigo-200 hover:bg-indigo-500 hover:text-white'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => handleNavigation('products')}
            className={`px-3 py-2 rounded-md transition-colors ${
              activePage === 'products'
                ? 'bg-indigo-700 text-white'
                : 'text-indigo-200 hover:bg-indigo-500 hover:text-white'
            }`}
          >
            Products
          </button>
          <button
            onClick={() => handleNavigation('suppliers')}
            className={`px-3 py-2 rounded-md transition-colors ${
              activePage === 'suppliers'
                ? 'bg-indigo-700 text-white'
                : 'text-indigo-200 hover:bg-indigo-500 hover:text-white'
            }`}
          >
            Suppliers
          </button>
        </nav>
      </div>
    </header>
  );
}