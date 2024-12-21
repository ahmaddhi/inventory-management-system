using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
    public class InventoryDbContext : DbContext
    {
        public InventoryDbContext(DbContextOptions<InventoryDbContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; } = null!;
        public DbSet<Order> Orders { get; set; } = null!;
        public DbSet<Supplier> Suppliers { get; set; } = null!;
        public DbSet<Category> Categories { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Define relationships
            modelBuilder.Entity<Product>()
                .HasIndex(p => p.SupplierId)
                .IsUnique(false);   

            modelBuilder.Entity<Product>()
                .HasIndex(p => p.CategoryId)
                .IsUnique(false);

            // Specify precision for decimal properties
            modelBuilder.Entity<Product>()
                .Property(p => p.Price)
                .HasPrecision(18, 2);

            // Seed initial data
            try
            {
                modelBuilder.Entity<Category>().HasData(SeedData.GetCategories());
                modelBuilder.Entity<Supplier>().HasData(SeedData.GetSuppliers());
                modelBuilder.Entity<Product>().HasData(SeedData.GetProducts());
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error seeding data: {ex.Message}");
            }
        }
    }
}
