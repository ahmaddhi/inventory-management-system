using System.Collections.Generic;
using backend.Models;
using backend.Repositories;

namespace backend.Services
{
    public class ReportService
    {
        private readonly IProductRepository _productRepository;
        private readonly IOrderRepository _orderRepository;

        public ReportService(IProductRepository productRepository, IOrderRepository orderRepository)
        {
            _productRepository = productRepository;
            _orderRepository = orderRepository;
        }

        public object GenerateInventoryReport()
        {
            var products = _productRepository.GetAll();
            var totalProducts = products.Count();
            var totalStock = products.Sum(p => p.StockQuantity);

            return new
            {
                TotalProducts = totalProducts,
                TotalStock = totalStock
            };
        }
    }
}
