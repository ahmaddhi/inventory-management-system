import React, { useState, useEffect } from 'react';
import { DashboardPage } from '../pages/DashboardPage';
import { ProductsPage } from '../pages/ProductsPage';
import { SuppliersPage } from '../pages/SuppliersPage';

type Page = 'dashboard' | 'products' | 'suppliers';

// Create a custom event type
interface PageChangeEvent extends CustomEvent {
  detail: Page;
}

export function Routes() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  useEffect(() => {
    const handlePageChange = (e: Event) => {
      const pageEvent = e as PageChangeEvent;
      setCurrentPage(pageEvent.detail);
    };

    // Add event listener
    window.addEventListener('pageChange', handlePageChange);

    // Clean up
    return () => {
      window.removeEventListener('pageChange', handlePageChange);
    };
  }, []);

  // Render the appropriate page
  switch (currentPage) {
    case 'products':
      return <ProductsPage />;
    case 'suppliers':
      return <SuppliersPage />;
    default:
      return <DashboardPage />;
  }
}

// Export navigation function
export const navigateTo = (page: Page) => {
  const event = new CustomEvent('pageChange', { detail: page });
  window.dispatchEvent(event);
};