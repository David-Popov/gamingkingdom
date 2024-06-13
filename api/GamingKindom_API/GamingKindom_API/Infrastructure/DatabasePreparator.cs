using Data;
using Microsoft.EntityFrameworkCore;

namespace GamingKindom_API.Infrastructure
{
    public static class DatabasePreparator
    {
        public static IApplicationBuilder PrepareDatabase(this IApplicationBuilder app)
        {
            using var scopedServices = app.ApplicationServices.CreateScope();

            var data = scopedServices.ServiceProvider.GetService<ApplicationDbContext>();

            if (data is not null)
            {
                data.Database.Migrate();
            }

            return app;
        }
    }
}
