using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContextDB.ModelsVm
{
    public class RespuestaVm
    {
        public bool Estatus { get; set; }
        public string Mensaje { get; set; }
        public Object T { get; set; }
    }
}
