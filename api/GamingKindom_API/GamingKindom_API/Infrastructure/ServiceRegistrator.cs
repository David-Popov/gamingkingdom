using Services.Interfaces;
using Services.Services;

namespace GamingKindom_API.Infrastructure
{
    public static class ServiceRegistrator
    {
        public static void RegisterServices(IServiceCollection services)
        {
            services.AddScoped<IProductService, ProductService>();
            services.AddScoped<IOsService, OsService>();
            services.AddScoped<IPlatformService, PlatformService>();
            services.AddScoped<IGenreService, GenreService>();
            services.AddScoped<IRoleService, RoleService>();
            services.AddScoped<IWishListItemService, WishListItemService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<IRegionService, RegionService>();
        }
    }
}
