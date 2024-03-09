using Data.DataModels;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Services
{
    public class RoleService : IRoleService
    {
        public Task Add(Role entity)
        {
            throw new NotImplementedException();
        }

        public Task Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Role>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<Role> GetById(int id)
        {
            throw new NotImplementedException();
        }

        public Task Update(Role entity)
        {
            throw new NotImplementedException();
        }
    }
}
