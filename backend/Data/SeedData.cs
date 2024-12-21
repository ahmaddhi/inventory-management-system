using System.Collections.Generic;
using backend.Models;

namespace backend.Data
{
    public static class SeedData
    {
        public static List<Supplier> GetSuppliers()
        {
            return new List<Supplier>
            {
                new Supplier
                {
                    Id = 1,
                    Name = "ABC Suppliers",
                    Email = "abc@suppliers.com",
                    Phone = "018-5672845",
                    Address = "Kuala Lumpur, Malaysia"
                },
                new Supplier
                {
                    Id = 2,
                    Name = "XYZ Traders",
                    Email = "xyz@traders.com",
                    Phone = "016-1234567",
                    Address = "Penang, Malaysia"
                }
            };
        }

        public static List<Category> GetCategories()
        {
            return new List<Category>
            {
                new Category { Id = 1, Name = "Electronics" },
                new Category { Id = 2, Name = "Appliances" },
                new Category { Id = 3, Name = "Furniture" }
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
                    Price = 1200.00m,
                    StockQuantity = 10,
                    SupplierId = 1,
                    CategoryId = 1,
                    ReorderPoint = 3
                },
                new Product
                {
                    Id = 2,
                    Name = "Smartphone",
                    Price = 800.00m,
                    StockQuantity = 20,
                    SupplierId = 1,
                    CategoryId = 1,
                    ReorderPoint = 5
                },
                new Product
                {
                    Id = 3,
                    Name = "Microwave",
                    Price = 150.00m,
                    StockQuantity = 15,
                    SupplierId = 2,
                    CategoryId = 2,
                    ReorderPoint = 2
                },
                new Product
                {
                    Id = 4,
                    Name = "Office Chair",
                    Price = 100.00m,
                    StockQuantity = 8,
                    SupplierId = 2,
                    CategoryId = 3,
                    ReorderPoint = 3
                }
            };
        }
    }
}
