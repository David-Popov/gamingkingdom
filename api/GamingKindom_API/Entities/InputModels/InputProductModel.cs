using Data.DataModels;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Entities.InputModels
{
    public class InputProductModel
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string ImageUrl { get; set; }

        [Required]
        [Range(0, double.MaxValue, ErrorMessage = "Price must be a positive value")]
        public double Price { get; set; }

        public string Description { get; set; }

        [Range(0, 5, ErrorMessage = "Rating must be between 0 and 5")]
        public double? Rating { get; set; }

        public ICollection<Region> Regions { get; set; }

        public ICollection<OS> OperatingSystems { get; set; }

        public ICollection<Platform> Platforms { get; set; }

        public ICollection<Genre> Genres { get; set; }

        public ICollection<ProductSeller> ProductSellers { get; set; }
    }
}
