using Data.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IGenreService
    {
        Task<IEnumerable<Genre>> GetAll();

        Task<Genre> GetById(int id);

        Task Add(Genre entity);

        Task Update(Genre entity);

        Task Delete(int id);
    }
}
