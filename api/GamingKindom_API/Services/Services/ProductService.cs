using Data;
using Data.DataModels;
using Entities.InputModels;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using NLog;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Util.UtilHelpers;

namespace Services.Services
{
    public class ProductService : IProductService
    {
        private readonly ApplicationDbContext _context;
        private readonly Logger _logger = LogManager.GetCurrentClassLogger();

        public ProductService(ApplicationDbContext context)
        {
            this._context = context;
        }

        public async Task Add(Product entity)
        {
            try
            {
                if (!Validator.IsEntityValid(entity))
                {
                    return;
                }

                await this._context.Products.AddAsync(entity);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.Error(ex.Message, ex.StackTrace);
            }
        }

        public async Task Delete(int id)
        {
            try
            {
                var product = await this.GetById(id);
                this._context.Products.Remove(product);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.Error(ex.Message, ex.StackTrace);
            }
        }

        public async Task<IEnumerable<Product>> GetAll()
        {
            try
            {
                var product = await this._context.Products
                    .Include(g => g.Genres)
                    .Include(p => p.Platforms)
                    .ToListAsync();

                if (product is null)
                {
                    return new List<Product>();
                }

                return product;
            }
            catch (Exception ex)
            {
                _logger.Error(ex.Message, ex.StackTrace);
                return new List<Product>();
            }
        }

        public async Task<Product> GetById(int id)
        {
            try
            {
                if (id < 0)
                {
                    return new Product() { Id = -1 };
                }

                var product = await this._context.Products.FirstOrDefaultAsync(x => x.Id == id);

                if (product is null)
                {
                    return new Product() { Id = -1 };
                }

                return product;
            }
            catch (Exception ex)
            {
                _logger.Error(ex.Message, ex.StackTrace);
                return new Product() { Id = -1 };
            }
        }

        public async Task Update(InputProductModel entity)
        {
            try
            {
                if (!Validator.IsEntityValid(entity))
                {
                    return;
                }

                var product = await this.GetById(entity.Id);

                if (product is null)
                {
                    return;
                }

                product.Name = entity.Name;
                product.OperatingSystems = entity.OperatingSystems;
                product.Description = entity.Description;
                product.ProductSellers = entity.ProductSellers;
                product.Genres = entity.Genres;
                product.Platforms = entity.Platforms;
                product.ImageUrl = entity.ImageUrl;
                product.Price = entity.Price;
                product.Rating = entity.Rating;
                product.Regions = entity.Regions;

                this._context.Products.Update(product);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.Error(ex.Message, ex.StackTrace);
            }
        }

        public async Task UpdateWithDto(InputProductModel model)
        {
            try
            {
                if (!Validator.IsEntityValid(model))
                {

                    return;
                }

                var product = await this.GetById(model.Id);

                if (product is null)
                {
                    return;
                }

                product.Name = model.Name;
                product.OperatingSystems = model.OperatingSystems;
                product.Description = model.Description;
                product.ProductSellers = model.ProductSellers;
                product.Genres = model.Genres;
                product.Platforms = model.Platforms;
                product.ImageUrl = model.ImageUrl;
                product.Price = model.Price;
                product.Rating = model.Rating;
                product.Regions = model.Regions;

                this._context.Products.Update(product);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                _logger.Error(ex.Message, ex.StackTrace);
            }
        }
    }
}
