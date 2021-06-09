using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContextDB.Models
{
    public class SubVenta
    {
        public int Id { get; set; }
        public int ProductoId { get; set; }
        public int Cantidad { get; set; }
        public decimal Importe { get; set; }
        public int VentaId { get; set; }

        public Venta Venta { get; set; }
    }
}
