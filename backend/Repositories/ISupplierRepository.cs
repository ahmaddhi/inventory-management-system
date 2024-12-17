using System.Collections.Generic;
using backend.Models;

namespace backend.Repositories
{
    public interface ISupplierRepository
    {
        IEnumerable<Supplier> GetAll();
        Supplier GetById(int id);
        Supplier Add(Supplier supplier);
        bool Update(Supplier supplier);
        bool Delete(int id);
    }
}
