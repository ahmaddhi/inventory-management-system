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

        public Supplier GetSupplierById(int id)
        {
            return _supplierRepository.GetById(id);
        }

        public Supplier AddSupplier(Supplier supplier)
        {
            return _supplierRepository.Add(supplier);
        }

        public bool UpdateSupplier(Supplier supplier)
        {
            return _supplierRepository.Update(supplier);
        }

        public bool DeleteSupplier(int id)
        {
            return _supplierRepository.Delete(id);
        }
    }
}
