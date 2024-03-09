using Data.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IPlatformService
    {
        Task<IEnumerable<Platform>> GetAll();

        Task<Platform> GetById(int id);

        Task Add(Platform entity);

        Task Update(Platform entity);

        Task Delete(int id);
    }
}
