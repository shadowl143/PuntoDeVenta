using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContextDB.Models
{
    public class Usuarios
    {
        public int  Id { get; set; }
        public string NombreUsuario { get; set; }
        public string Contrasena { get; set; }
        public int TipoUsuarioId { get; set; }

        public TipoUsuario TipoUsuario { get; set; }
    }
}
