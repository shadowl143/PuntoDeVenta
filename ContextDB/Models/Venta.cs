using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContextDB.Models
{
    public  class Venta
    {
        public int Id { get; set; }
        public decimal ImporteTotal { get; set; }
        public int CantidadProductos { get; set; }
        public DateTime Fecha { get; set; }
        public int UsuarioId { get; set; }

        public Usuarios Usuario { get; set; }
        public ICollection<SubVenta> subVentas { get; set; }
    }
}
