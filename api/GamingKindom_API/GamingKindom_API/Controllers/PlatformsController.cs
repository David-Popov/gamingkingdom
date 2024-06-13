using Microsoft.AspNetCore.Mvc;
using NLog;
using Services.Interfaces;

namespace GamingKindom_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PlatformsController : ControllerBase
    {
        private readonly IPlatformService _platformService;
        private static Logger _logger = LogManager.GetCurrentClassLogger();
        public PlatformsController(IPlatformService platformService)
        {
            _platformService = platformService;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            try
            {
                var data = await this._platformService.GetAll();

                if (!data.Any())
                {
                    var response = new
                    {
                        Message = "There are no platforms available.",
                        Data = data
                    };

                    return Ok(response);
                }

                var successResponse = new
                {
                    Message = "Platforms were successfullu fetched.",
                    Data = data
                };

                return Ok(successResponse);
            }
            catch (Exception ex)
            {
                _logger.Error(ex.Message, ex.StackTrace);
                return BadRequest(ex.Message);
            }
        }
    }
}
