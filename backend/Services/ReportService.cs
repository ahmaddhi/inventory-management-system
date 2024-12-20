using System.Collections.Generic;
using System.Linq;
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

        public object GenerateSalesReport()
        {
            var orders = _orderRepository.GetAll();

            var totalOrders = orders.Count();
            var totalQuantitySold = orders.Sum(o => o.Quantity);
            var totalRevenue = orders.Sum(o =>
            {
                var product = _productRepository.GetById(o.ProductId);
                return product != null ? product.Price * o.Quantity : 0;
            });

            return new
            {
                TotalOrders = totalOrders,
                TotalQuantitySold = totalQuantitySold,
                TotalRevenue = totalRevenue
            };
        }
    }
}
