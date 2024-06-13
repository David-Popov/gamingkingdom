using Data.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IOsService
    {
        Task<IEnumerable<OS>> GetAll();

        Task<OS> GetById(int id);

        Task Add(OS entity);

        Task Update(OS entity);

        Task Delete(int id);
    }
}
