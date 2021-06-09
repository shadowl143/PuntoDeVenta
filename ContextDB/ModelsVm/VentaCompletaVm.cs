using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContextDB.ModelsVm
{
    public class VentaCompletaVm
    {
        public VentaVm VentaVm { get; set; }
        public List<SubVentasVm> SubVentas { get; set; }
    }
}
