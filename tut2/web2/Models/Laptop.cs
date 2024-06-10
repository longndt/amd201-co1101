using System.ComponentModel.DataAnnotations;

namespace web2.Models
{
    public class Laptop
    {
        public int Id { get; set; }
        public string Brand { get; set; }

        [MinLength(5, ErrorMessage = "Độ dài tối thiểu là 5")]
        [MaxLength(30 , ErrorMessage = "Độ dài tối đa là 30")]
        public string Model { get; set; }

        [Range(1, 100, ErrorMessage = "Số lượng phải từ 1 đến 100")]
        public int Quantity { get; set; }
        
        public decimal Price { get; set; }

        public string Image { get; set; }

        public string Color { get; set; }   
    }
}
