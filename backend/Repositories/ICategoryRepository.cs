using System.Collections.Generic;
using backend.Models;

namespace backend.Repositories
{
    public interface ICategoryRepository
    {
        IEnumerable<Category> GetAll();
        Category? GetById(int id);
        Category Add(Category category);
        bool Update(Category category);
        bool Delete(int id);
    }
}
