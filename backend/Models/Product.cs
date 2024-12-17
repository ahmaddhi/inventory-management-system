namespace backend.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public int StockQuantity { get; set; }
        public int SupplierId { get; set; }
        public int CategoryId { get; set; }

        // Navigation properties
        public Supplier Supplier { get; set; }
        public Category Category { get; set; }
    }
}
