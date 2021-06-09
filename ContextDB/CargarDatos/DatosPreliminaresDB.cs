using ContextDB.Models;
using DataBaseContext.Models;
using DataBaseContext.Models.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataBaseContext.GenerarDB
{
    public class DatosPreliminaresDB
    {
        private readonly Contexto db;

        public DatosPreliminaresDB(Contexto db)
        {
            this.db = db;
        }

        public async Task Llenado()
        {
            await this.db.Database.EnsureCreatedAsync();
            this.Usuarios().Wait();
        }

        public async Task TipoUsuario()
        {
            if (!db.Usuarios.Any())
            {
                await db.TipoUsuarios.AddAsync(new TipoUsuario()
                {
                  Descripcion="Cajero"
                });
                await db.SaveChangesAsync();
                await db.TipoUsuarios.AddAsync(new TipoUsuario()
                {
                    Descripcion = "Supervisor"
                });
            }

        }

        public async Task Usuarios()
        {
            if (!db.Usuarios.Any())
            {
                await db.Usuarios.AddAsync(new Usuarios()
                {
                   NombreUsuario="admin",
                   Contrasena="admin"
                });
                await db.SaveChangesAsync();
            }

        }

      
    }
}
