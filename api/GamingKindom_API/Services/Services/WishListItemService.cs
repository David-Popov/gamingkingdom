using Data.DataModels;
using Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Services
{
    public class WishListItemService : IWishListItemService
    {
        public Task Add(WishListItem entity)
        {
            throw new NotImplementedException();
        }

        public Task Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<WishListItem>> GetAll()
        {
            throw new NotImplementedException();
        }

        public Task<WishListItem> GetById(int id)
        {
            throw new NotImplementedException();
        }

        public Task Update(WishListItem entity)
        {
            throw new NotImplementedException();
        }
    }
}
