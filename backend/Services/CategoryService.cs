using System.Collections.Generic;
using backend.Models;
using backend.Repositories;

namespace backend.Services
{
    public class CategoryService
    {
        private readonly ICategoryRepository _categoryRepository;

        public CategoryService(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }

        public IEnumerable<Category> GetAllCategories()
        {
            return _categoryRepository.GetAll();
        }

        public Category? GetCategoryById(int id)
        {
            return _categoryRepository.GetById(id);
        }

        public Category AddCategory(Category category)
        {
            return _categoryRepository.Add(category);
        }

        public bool UpdateCategory(int id, Category updatedCategory)
        {
            var existingCategory = _categoryRepository.GetById(id);
            if (existingCategory == null)
                return false;

            existingCategory.Name = updatedCategory.Name;

            return _categoryRepository.Update(existingCategory);
        }

        public bool DeleteCategory(int id)
        {
            return _categoryRepository.Delete(id);
        }
    }
}
