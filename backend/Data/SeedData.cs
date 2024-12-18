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
                new Supplier { Id = 1, Name = "ABC Suppliers", ContactInfo = "abc@suppliers.com" },
                new Supplier { Id = 2, Name = "XYZ Traders", ContactInfo = "xyz@traders.com" }
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
                    CategoryId = 1
                },
                new Product
                {
                    Id = 2,
                    Name = "T-Shirt",
                    Price = 20,
                    StockQuantity = 50,
                    SupplierId = 2,
                    CategoryId = 2
                }
            };
        }
    }
}
