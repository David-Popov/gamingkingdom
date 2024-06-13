using Data.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    public interface IWishListItemService
    {
        Task<IEnumerable<WishListItem>> GetAll();

        Task<WishListItem> GetById(int id);

        Task Add(WishListItem entity);

        Task Update(WishListItem entity);

        Task Delete(int id);
    }
}
