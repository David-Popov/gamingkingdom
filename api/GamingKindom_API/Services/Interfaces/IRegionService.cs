using Data.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IRegionService
    {
        Task<IEnumerable<Region>> GetAll();

        Task<Region> GetById(int id);

        Task Add(Region entity);

        Task Update(Region entity);

        Task Delete(int id);
    }
}
