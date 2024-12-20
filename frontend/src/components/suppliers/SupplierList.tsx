import React from 'react';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';
import { Supplier } from '../../types/supplier';

interface SupplierListProps {
  suppliers: Supplier[];
}

export function SupplierList({ suppliers }: SupplierListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {suppliers.map((supplier) => (
        <div key={supplier.id} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Building2 className="h-6 w-6 text-indigo-600 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">{supplier.name}</h3>
          </div>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>{supplier.email}</span>
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>{supplier.phone}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{supplier.address}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}