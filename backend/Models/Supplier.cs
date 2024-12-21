using System.Collections.Generic;

namespace backend.Models
{
    public class Supplier
    {
        public int Id { get; set; }

        // Non-nullable properties
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }

        // Constructor to ensure non-nullable properties are initialized
        public Supplier()
        {
            Name = string.Empty;
            Email = string.Empty;
            Phone = string.Empty;
            Address = string.Empty;
        }
    }
}
