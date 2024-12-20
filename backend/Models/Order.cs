using System;

namespace backend.Models
{
    public class Order
    {
        public int Id { get; set; }
        public string CustomerName { get; set; } = string.Empty; // Initialize to avoid null
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public DateTime OrderDate { get; set; }

        // Navigation property
        public Product Product { get; set; } = null!; // Use null-forgiving operator
    }
}
