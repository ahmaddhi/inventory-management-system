using System.Collections.Generic;

namespace backend.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty; // Initialize to avoid null

        // Navigation property
        public ICollection<Product> Products { get; set; } = new List<Product>(); // Initialize with empty list
    }
}
