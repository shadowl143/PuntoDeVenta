using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContextDB.ModelsVm
{
    public class VentaVm
    {

        public int Id { get; set; }
        public decimal ImporteTotal { get; set; }
        public int CantidadProductos { get; set; }
        public DateTime Fecha { get; set; }
        public string UsuarioDescripcion { get; set; }
        public string TipoUsuarioDescripcion { get; set; }
        public int UsuarioId { get; set; }

    }
}
