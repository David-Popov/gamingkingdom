using Data.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IUserService
    {
         Task<IEnumerable<User>> GetAll();

        Task<User> GetById(int id);

        Task Add(User entity);

        Task Update(User entity);

        Task Delete(int id);
    }
}
