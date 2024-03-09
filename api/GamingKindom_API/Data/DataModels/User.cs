using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.DataModels
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(20)]
        public string Name { get; set; }
        [MaxLength(20)]
        public string LastName { get; set; }
        [Required]
        [MaxLength(20)]
        public string Username { get; set; }
        [Required]
        [MaxLength(40)]
        public string Email { get; set; }
        [MaxLength(20)]
        public string Phone { get; set; }
        public string ProfileImageUrl { get; set; }
        [Required]
        public string Password { get; set; }
        public string CreatedAt { get; set; }
        public string LastLogged { get; set; }
        [Required]
        public int RoleId { get; set; }
        public Role Role { get; set; }
        [Required]
        public bool IsActive { get; set; }
        public bool IsSeller { get; set; }
        public ICollection<ProductSeller> ProductsSelling { get; set; }
    }
}
