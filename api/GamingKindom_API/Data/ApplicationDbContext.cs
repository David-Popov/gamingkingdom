using Data.DataModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;

namespace Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
           : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Platform> Platforms { get; set; }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<WishListItem> WishListItems { get; set; }
        public DbSet<ProductSeller> ProductSellers { get; set; }
        public DbSet<Region> Regions { get; set; }
        public DbSet<OS> OperatingSystems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ProductSeller>()
                .HasKey(ps => new { ps.ProductId, ps.UserId });

            modelBuilder.Entity<ProductSeller>()
                .HasOne(ps => ps.Product)
                .WithMany(p => p.ProductSellers)
                .HasForeignKey(ps => ps.ProductId);

            modelBuilder.Entity<ProductSeller>()
                .HasOne(ps => ps.User)
                .WithMany(u => u.ProductsSelling)
                .HasForeignKey(ps => ps.UserId);

        }
    }
}
