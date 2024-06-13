using Data;
using Data.DataModels;
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
    public class PlatformService : IPlatformService
    {
        private readonly ApplicationDbContext _context;
        private readonly static Logger _logger = LogManager.GetCurrentClassLogger();

        public PlatformService(ApplicationDbContext context)
        {
            this._context = context;
        }

        public async Task Add(Platform entity)
        {
            if (!Validator.IsEntityValid(entity))
            {
                return;
            }

            try
            {
                await this._context.Platforms.AddAsync(entity);
                await this._context.SaveChangesAsync();
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
                var platform = await this.GetById(id);
                this._context.Platforms.Remove(platform!);
                await this._context.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                _logger.Error(ex.Message, ex.StackTrace);
            }
            catch (Exception ex)
            {
                _logger.Error(ex.Message, ex.StackTrace);
            }
        }

        public async Task<IEnumerable<Platform>> GetAll()
        {
            try
            {
                var platforms = await this._context.Platforms
                    .Include(x => x.Products)
                    .ToListAsync();

                if (platforms.Count == 0 || platforms is null)
                {
                    return new List<Platform>();
                }

                return platforms;
            }
            catch (Exception ex)
            {
                _logger.Error(ex.Message, ex.StackTrace);
                return new List<Platform>();
            }
        }

        public async Task<Platform> GetById(int id)
        {
            try
            {
                var platforms = await this._context.Platforms.FirstOrDefaultAsync(x => x.Id == id);

                if (platforms is null)
                {
                    return new Platform() { Id = -1 };
                }

                return platforms;
            }
            catch (Exception ex)
            {
                _logger.Error(ex.Message, ex.StackTrace);
                return new Platform() { Id = -1 };
            }
        }

        public async Task Update(Platform entity)
        {
            try
            {
                if (entity is null && !Validator.IsEntityValid(entity))
                {
                    return;
                }

                this._context.Platforms.Update(entity!);
                await this._context.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                _logger.Error(ex.Message, ex.StackTrace);
            }
            catch (Exception ex)
            {
                _logger.Error(ex.Message, ex.StackTrace);
            }
        }
    }
}
