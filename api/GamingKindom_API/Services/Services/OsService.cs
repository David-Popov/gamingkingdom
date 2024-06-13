using Data.DataModels;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Services
{
    public class OsService : IOsService
    {
        public Task Add(OS entity)
        {
            throw new NotImplementedException();
        }

        public Task Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<OS>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<OS> GetById(int id)
        {
            throw new NotImplementedException();
        }

        public Task Update(OS entity)
        {
            throw new NotImplementedException();
        }
    }
}
