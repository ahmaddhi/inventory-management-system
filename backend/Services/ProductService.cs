using System.Collections.Generic;
using backend.Models;
using backend.Repositories;

namespace backend.Services
{
    public class ProductService
    {
        private readonly IProductRepository _productRepository;

        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public IEnumerable<Product> GetAllProducts()
        {
            return _productRepository.GetAll();
        }

        public Product? GetProductById(int id)
        {
            return _productRepository.GetById(id);
        }

        public Product AddProduct(Product product)
        {
            return _productRepository.Add(product);
        }

        public bool UpdateProduct(int id, Product updatedProduct)
        {
            var existingProduct = _productRepository.GetById(id);
            if (existingProduct == null)
                return false;

            existingProduct.Name = updatedProduct.Name;
            existingProduct.Price = updatedProduct.Price;
            existingProduct.StockQuantity = updatedProduct.StockQuantity;
            existingProduct.SupplierId = updatedProduct.SupplierId;
            existingProduct.CategoryId = updatedProduct.CategoryId;
            existingProduct.ReorderPoint = updatedProduct.ReorderPoint;

            return _productRepository.Update(existingProduct);
        }

        public bool DeleteProduct(int id)
        {
            return _productRepository.Delete(id);
        }
    }
}
