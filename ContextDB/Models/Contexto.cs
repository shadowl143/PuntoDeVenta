using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContextDB.Models
{
    public class Contexto : DbContext
    {
        public Contexto(DbContextOptions<Contexto> options) : base(options)
        {

        }
        public DbSet<Usuarios> Usuarios { get; set; }
        public DbSet<Departamento> Departamentos { get; set; }
        public DbSet<Venta> Ventas { get; set; }
        public DbSet<SubVenta> SubVentas { get; set; }
        public DbSet<TipoUsuario> TipoUsuarios { get; set; }
        public DbSet<Productos> Productos { get; set; }

         protected override void OnModelCreating(ModelBuilder builder)
        {

            var cascadas = builder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()).Where(e => !e.IsOwnership && e.DeleteBehavior == DeleteBehavior.Cascade);
            base.OnModelCreating(builder);

        }
    }
}
