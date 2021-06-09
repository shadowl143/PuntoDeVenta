using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContextDB.Models
{
    public class Departamento
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }

        public ICollection<Productos> Productos { get; set; }
    }
}
