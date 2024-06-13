using Data.DataModels;
using Entities.InputModels;
using Microsoft.AspNetCore.Mvc;
using NLog;
using Services.Interfaces;
using Util.UtilHelpers;

namespace GamingKindom_API.Controllers
{
    public class ProductsController : ControllerBase
    {
        [ApiController]
        [Route("[controller]")]
        public class ProductController : ControllerBase
        {
            private readonly IProductService _productService;
            private static Logger _logger = LogManager.GetCurrentClassLogger();
            public ProductController(IProductService productService)
            {
                _productService = productService;
            }

            [HttpGet]
            public async Task<IActionResult> Index()
            {
                try
                {
                    var data = await this._productService.GetAll();

                    if (!data.Any())
                    {
                        var response = new
                        {
                            Message = "No items found.",
                            Data = new List<string>()
                        };
                        return Ok(response);
                    }

                    var successResponse = new
                    {
                        Message = "Products fetched successfully.",
                        Data = data
                    };

                    return Ok(successResponse);
                }
                catch (Exception ex)
                {
                    _logger.Error(ex);
                    return BadRequest(ex.Message);
                }
            }

            [HttpGet("/getbyid/{id}")]
            public async Task<IActionResult> GetProductById(int id)
            {
                try
                {
                    var data = await this._productService.GetById(id);

                    if (data is null)
                    {
                        var response = new
                        {
                            Message = "No items found.",
                            Data = new List<string>()
                        };
                        return Ok(response);
                    }

                    var successResponse = new
                    {
                        Message = "Products fetched successfully.",
                        Data = data
                    };

                    return Ok(successResponse);
                }
                catch (Exception ex)
                {
                    _logger.Error(ex);
                    return BadRequest(ex.Message);
                }
            }

            [HttpPost("/insert")]

            public async Task<IActionResult> InsertProduct([FromBody] InputProductModel model)
            {
                try
                {
                    if (!Validator.IsEntityValid(model))
                    {
                        return BadRequest("Data was empty!");
                    }

                    var product = new Product
                    {
                        Name = model.Name,
                        OperatingSystems = model.OperatingSystems,
                        Description = model.Description,
                        ProductSellers = model.ProductSellers,
                        Genres = model.Genres,
                        Platforms = model.Platforms,
                        ImageUrl = model.ImageUrl,
                        Price = model.Price,
                        Rating = model.Rating,
                        Regions = model.Regions,
                    };

                    await this._productService.Add(product);
                    return Ok("Product was successfully added.");
                }
                catch (Exception ex)
                {
                    _logger.Error(ex);
                    return BadRequest(ex.Message);
                }
            }

            [HttpPut("/updatemodel")]
            public async Task<IActionResult> UpdateProduct([FromBody] InputProductModel model)
            {
                try
                {
                    if (!Validator.IsEntityValid(model))
                    {
                        return BadRequest("Model is not valid!");
                    }

                    await this._productService.Update(model);
                    return Ok("Product was update successfully.");

                }
                catch (Exception ex)
                {
                    _logger.Error(ex);
                    return BadRequest(ex.Message);
                }

            }

            [HttpPut("/update")]
            public async Task<IActionResult> UpdateProduct(int id)
            {
                try
                {
                    if (id < 0)
                    {
                        return BadRequest("Model is not valid!");
                    }

                    await this._productService.Delete(id);
                    return Ok("Product was update successfully.");

                }
                catch (Exception ex)
                {
                    _logger.Error(ex);
                    return BadRequest(ex.Message);
                }
            }
        }
    }
}
