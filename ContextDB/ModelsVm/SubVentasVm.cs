using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContextDB.ModelsVm
{
    public class SubVentasVm
    {
        public int Id { get; set; }
        public string ProductoDescripcion { get; set; }
        public int ProductoId { get; set; }
        public int Cantidad { get; set; }
        public decimal Importe { get; set; }
        public int VentaId { get; set; }
    }
}
