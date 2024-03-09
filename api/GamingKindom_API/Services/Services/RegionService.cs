using Data.DataModels;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Services
{
    public class RegionService : IRegionService
    {
        public Task Add(Region entity)
        {
            throw new NotImplementedException();
        }

        public Task Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Region>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<Region> GetById(int id)
        {
            throw new NotImplementedException();
        }

        public Task Update(Region entity)
        {
            throw new NotImplementedException();
        }
    }
}
