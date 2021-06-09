using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContextDB.ModelsVm
{
    public class ProductosVm
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public decimal Precio { get; set; }
        public int DepartamentoId { get; set; }
        public string DepartamentoDescripcion { get; set; }
    }
}
