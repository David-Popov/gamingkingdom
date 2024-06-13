using Data.DataModels;
using Entities.InputModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IProductService
    {
        Task<IEnumerable<Product>> GetAll();

        Task<Product> GetById(int id);

        Task Add(Product entity);

        Task Update(InputProductModel entity);

        Task Delete(int id);
    }
}
