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

        public Product GetProductById(int id)
        {
            return _productRepository.GetById(id);
        }

        public Product AddProduct(Product product)
        {
            return _productRepository.Add(product);
        }

        public bool UpdateProduct(Product product)
        {
            return _productRepository.Update(product);
        }

        public bool DeleteProduct(int id)
        {
            return _productRepository.Delete(id);
        }
    }
}
