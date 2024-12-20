using System.Collections.Generic;
using backend.Models;

namespace backend.Repositories
{
    public interface IOrderRepository
    {
        IEnumerable<Order> GetAll();
        Order? GetById(int id); // Allow nullable
        Order Add(Order order);
        bool Delete(int id);
    }

}
