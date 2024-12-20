using backend.Models;
using System.Collections.Generic;

namespace backend.Data
{
    public static class SeedData
    {
        public static List<Category> GetCategories()
        {
            return new List<Category>
            {
                new Category { Id = 1, Name = "Electronics" },
                new Category { Id = 2, Name = "Clothing" },
                new Category { Id = 3, Name = "Groceries" }
            };
        }

        public static List<Supplier> GetSuppliers()
        {
            return new List<Supplier>
            {
                new Supplier { Id = 1, Name = "ABC Suppliers", Email = "abc@suppliers.com", Phone = "018-5672845", Address= "Kuala Lumpur, Malaysia" },
                new Supplier { Id = 2, Name = "XYZ Traders", Email = "xyz@traders.com",Phone = "011-2536412", Address="Cyberjaya, Malaysia" },
            };
        }

        public static List<Product> GetProducts()
        {
            return new List<Product>
            {
                new Product
                {
                    Id = 1,
                    Name = "Laptop",
                    Price = 1200,
                    StockQuantity = 10,
                    SupplierId = 1,
                    CategoryId = 1,
                    ReorderPoint = 3
                },
                new Product
                {
                    Id = 2,
                    Name = "T-Shirt",
                    Price = 20,
                    StockQuantity = 50,
                    SupplierId = 2,
                    CategoryId = 2,
                    ReorderPoint = 5
                }
            };
        }
    }
}
