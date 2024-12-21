using System.Collections.Generic;
using System.Linq;
using backend.Data;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly InventoryDbContext _context;

        public ProductRepository(InventoryDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Product> GetAll()
        {
            return _context.Products?.ToList() ?? new List<Product>();
        }

        public Product? GetById(int id)
        {
            return _context.Products?.Find(id);
        }

        public Product Add(Product product)
        {
            _context.Products?.Add(product);
            _context.SaveChanges();
            return product;
        }

        public bool Update(Product product)
        {
            var existingProduct = _context.Products?.Find(product.Id);
            if (existingProduct == null)
                return false;

            existingProduct.Name = product.Name;
            existingProduct.Price = product.Price;
            existingProduct.StockQuantity = product.StockQuantity;
            existingProduct.SupplierId = product.SupplierId;
            existingProduct.CategoryId = product.CategoryId;
            existingProduct.ReorderPoint = product.ReorderPoint;

            _context.SaveChanges();
            return true;
        }

        public bool Delete(int id)
        {
            var product = _context.Products?.Find(id);
            if (product == null)
                return false;

            _context.Products?.Remove(product);
            _context.SaveChanges();
            return true;
        }

    }
}
