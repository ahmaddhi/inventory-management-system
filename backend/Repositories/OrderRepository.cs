using System.Collections.Generic;
using System.Linq;
using backend.Data;
using backend.Models;

namespace backend.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly InventoryDbContext _context;

        public OrderRepository(InventoryDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Order> GetAll()
        {
            return _context.Orders?.ToList() ?? new List<Order>();
        }

        public Order? GetById(int id)
        {
            // Allow null return if the order is not found
            return _context.Orders?.Find(id);
        }

        public Order Add(Order order)
        {
            _context.Orders?.Add(order);
            _context.SaveChanges();
            return order;
        }

        public bool Delete(int id)
        {
            var order = _context.Orders?.Find(id);
            if (order == null) return false;

            _context.Orders?.Remove(order);
            _context.SaveChanges();
            return true;
        }
    }
}
