using System.Collections.Generic;
using backend.Models;

namespace backend.Repositories
{
    public interface IProductRepository
    {
        IEnumerable<Product> GetAll();
        Product? GetById(int id); // Allow nullable
        Product Add(Product product);
        bool Update(Product product);
        bool Delete(int id);
    }
}
