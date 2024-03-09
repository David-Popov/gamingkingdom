using Microsoft.AspNetCore.Mvc;
using NLog;
using Services.Interfaces;

namespace GamingKindom_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GenresController : ControllerBase
    {
        private readonly IGenreService _genreService;
        private static Logger _logger = LogManager.GetCurrentClassLogger();

        public GenresController(IGenreService genreService)
        {
            _genreService = genreService;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            try
            {
                var data = await this._genreService.GetAll();

                if (!data.Any())
                {
                    var response = new
                    {
                        Message = "There are no genres available.",
                        Data = data
                    };

                    return Ok(response);
                }

                var successResponse = new
                {
                    Message = "Genres were successfullu fetched.",
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
