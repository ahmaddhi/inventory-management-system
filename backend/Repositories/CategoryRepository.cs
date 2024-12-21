using System.Collections.Generic;
using System.Linq;
using backend.Data;
using backend.Models;

namespace backend.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly InventoryDbContext _context;

        public CategoryRepository(InventoryDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Category> GetAll()
        {
            return _context.Categories?.ToList() ?? new List<Category>();
        }

        public Category? GetById(int id)
        {
            return _context.Categories?.Find(id);
        }

        public Category Add(Category category)
        {
            _context.Categories?.Add(category);
            _context.SaveChanges();
            return category;
        }

        public bool Update(Category category)
        {
            var existingCategory = _context.Categories?.Find(category.Id);
            if (existingCategory == null)
                return false;

            existingCategory.Name = category.Name;
            _context.SaveChanges();
            return true;
        }

        public bool Delete(int id)
        {
            var category = _context.Categories?.Find(id);
            if (category == null)
                return false;

            _context.Categories?.Remove(category);
            _context.SaveChanges();
            return true;
        }
    }
}
