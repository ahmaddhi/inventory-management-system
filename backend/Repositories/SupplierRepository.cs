using System.Collections.Generic;
using System.Linq;
using backend.Data;
using backend.Models;

namespace backend.Repositories
{
    public class SupplierRepository : ISupplierRepository
    {
        private readonly InventoryDbContext _context;

        public SupplierRepository(InventoryDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Supplier> GetAll()
        {
            return _context.Suppliers?.ToList() ?? new List<Supplier>();
        }

        public Supplier? GetById(int id)
        {
            return _context.Suppliers?.Find(id);
        }

        public Supplier Add(Supplier supplier)
        {
            _context.Suppliers?.Add(supplier);
            _context.SaveChanges();
            return supplier;
        }

        public bool Update(Supplier supplier)
        {
            var existingSupplier = _context.Suppliers?.Find(supplier.Id);
            if (existingSupplier == null)
                return false;

            existingSupplier.Name = supplier.Name;
            existingSupplier.Email = supplier.Email;
            existingSupplier.Phone = supplier.Phone;
            existingSupplier.Address = supplier.Address;

            _context.SaveChanges();
            return true;
        }

        public bool Delete(int id)
        {
            var supplier = _context.Suppliers?.Find(id);
            if (supplier == null)
                return false;

            // Optionally load related data if necessary
            _context.Entry(supplier).Collection(s => s.Products).Load();

            if (supplier.Products != null && supplier.Products.Any())
                throw new InvalidOperationException("Cannot delete a supplier with associated products.");

            _context.Suppliers?.Remove(supplier);
            _context.SaveChanges();
            return true;
        }
    }
}
