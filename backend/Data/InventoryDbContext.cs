using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data
{
    public class InventoryDbContext : DbContext
    {
        public InventoryDbContext(DbContextOptions<InventoryDbContext> options) : base(options)
        {
        }

        public DbSet<Product>? Products { get; set; }
        public DbSet<Order>? Orders { get; set; }
        public DbSet<Supplier>? Suppliers { get; set; }
        public DbSet<Category>? Categories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Define relationships
            modelBuilder.Entity<Product>()
                .HasOne(p => p.Supplier)
                .WithMany(s => s.Products)
                .HasForeignKey(p => p.SupplierId)
                .OnDelete(DeleteBehavior.Restrict); // Optional: Prevent cascading deletes

            modelBuilder.Entity<Product>()
                .HasOne(p => p.Category)
                .WithMany(c => c.Products)
                .HasForeignKey(p => p.CategoryId)
                .OnDelete(DeleteBehavior.Restrict); // Optional: Prevent cascading deletes

            // Specify precision for decimal properties
            modelBuilder.Entity<Product>()
                .Property(p => p.Price)
                .HasPrecision(18, 2);

            // Seed initial data
            modelBuilder.Entity<Category>().HasData(SeedData.GetCategories());
            modelBuilder.Entity<Supplier>().HasData(SeedData.GetSuppliers());
            modelBuilder.Entity<Product>().HasData(SeedData.GetProducts());
        }
    }
}
