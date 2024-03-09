using Data.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IRoleService
    {
        Task<IEnumerable<Role>> GetAll();

        Task<Role> GetById(int id);

        Task Add(Role entity);

        Task Update(Role entity);

        Task Delete(int id);
    }
}
