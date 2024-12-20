using System.Collections.Generic;
using backend.Models;
using backend.Repositories;

namespace backend.Services
{
    public class SupplierService
    {
        private readonly ISupplierRepository _supplierRepository;

        public SupplierService(ISupplierRepository supplierRepository)
        {
            _supplierRepository = supplierRepository;
        }

        public IEnumerable<Supplier> GetAllSuppliers()
        {
            return _supplierRepository.GetAll();
        }

        public Supplier? GetSupplierById(int id)
        {
            return _supplierRepository.GetById(id);
        }

        public Supplier AddSupplier(Supplier supplier)
        {
            return _supplierRepository.Add(supplier);
        }

        public bool UpdateSupplier(int id, Supplier updatedSupplier)
        {
            var existingSupplier = _supplierRepository.GetById(id);
            if (existingSupplier == null)
                return false;

            existingSupplier.Name = updatedSupplier.Name;
            existingSupplier.Email = updatedSupplier.Email;
            existingSupplier.Phone = updatedSupplier.Phone;
            existingSupplier.Address = updatedSupplier.Address;

            return _supplierRepository.Update(existingSupplier);
        }

        public bool DeleteSupplier(int id)
        {
            return _supplierRepository.Delete(id);
        }
    }
}
