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
    public class GenreService : IGenreService
    {
        private readonly ApplicationDbContext _context;
        private readonly static Logger _logger = LogManager.GetCurrentClassLogger();

        public GenreService(ApplicationDbContext context)
        {
            this._context = context;
        }

        public async Task Add(Genre entity)
        {
            if (entity is null && !Validator.IsEntityValid(entity))
            {
                return;
            }

            try
            {
                await this._context.Genres.AddAsync(entity!);
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
                var genre = await this.GetById(id);
                this._context.Genres.Remove(genre);
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

        public async Task<IEnumerable<Genre>> GetAll()
        {
            try
            {
                var genres = await this._context.Genres
                    .Include(x => x.Products)
                    .ToListAsync();

                if (genres.Count == 0 || genres is null)
                {
                    return new List<Genre>();
                }

                return genres;
            }
            catch (Exception ex)
            {
                _logger.Error(ex.Message, ex.StackTrace);
                return new List<Genre>();
            }
        }

        public async Task<Genre> GetById(int id)
        {
            try
            {
                var genre = await this._context.Genres.FirstOrDefaultAsync(x => x.Id == id);

                if (genre is null)
                {
                    return new Genre() { Id = -1 };
                }

                return genre;
            }
            catch (Exception ex)
            {
                _logger.Error(ex.Message, ex.StackTrace);
                return new Genre() { Id = -1 };
            }
        }

        public async Task Update(Genre entity)
        {
            try
            {
                if (entity is null && !Validator.IsEntityValid(entity))
                {
                    return;
                }

                this._context.Genres.Update(entity!);
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
