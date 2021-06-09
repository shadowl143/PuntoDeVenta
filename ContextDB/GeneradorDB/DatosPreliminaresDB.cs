using ContextDB.Models;
using System.Linq;
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
            this.TipoUsuario().Wait();
            this.Usuarios().Wait();
            this.Departamento().Wait();
            this.Productos().Wait();

        }
        public async Task TipoUsuario()
        {
            if (!db.TipoUsuarios.Any())
            {
                await db.TipoUsuarios.AddAsync(new TipoUsuario()
                {
                    Descripcion = "Cajero"
                });
                await db.SaveChangesAsync();


                await db.TipoUsuarios.AddAsync(new TipoUsuario()
                {
                    Descripcion = "Supervisor"
                });
                await db.SaveChangesAsync();
            }

        }
        public async Task Usuarios()
        {
            if (!db.Usuarios.Any())
            {
                await db.Usuarios.AddAsync(new Usuarios()
                {
                    NombreUsuario = "admin",
                    Contrasena = "admin",
                    TipoUsuarioId = 2
                });
                await db.SaveChangesAsync();

                await db.Usuarios.AddAsync(new Usuarios()
                {
                    NombreUsuario = "cajero",
                    Contrasena = "cajero",
                    TipoUsuarioId = 1
                });
                await db.SaveChangesAsync();
            }

        }
        public async Task Departamento()
        {
            if (!db.Departamentos.Any())
            {
                await db.Departamentos.AddAsync(new Departamento() { Descripcion = "Lacteos" });
                await db.SaveChangesAsync();

                await db.Departamentos.AddAsync(new Departamento() { Descripcion = "Abarrotes" });
                await db.SaveChangesAsync();

                await db.Departamentos.AddAsync(new Departamento() { Descripcion = "Futeria" });
                await db.SaveChangesAsync();

                await db.Departamentos.AddAsync(new Departamento() { Descripcion = "Cerveceria" });
                await db.SaveChangesAsync();
            }

        }
        public async Task Productos()
        {
            if (!db.Productos.Any())
            {
                await db.Productos.AddAsync(new Productos() { DepartamentoId = 1, Descripcion = "Litro de leche", Precio = 25.50M });
                await db.SaveChangesAsync();

                await db.Productos.AddAsync(new Productos() { DepartamentoId = 1, Descripcion = "Queso", Precio = 125.50M });
                await db.SaveChangesAsync();

                await db.Productos.AddAsync(new Productos() { DepartamentoId = 1, Descripcion = "Crema", Precio = 50.00M });
                await db.SaveChangesAsync();

                await db.Productos.AddAsync(new Productos() { DepartamentoId = 2, Descripcion = "Soda", Precio = 10.50M });
                await db.SaveChangesAsync();

                await db.Productos.AddAsync(new Productos() { DepartamentoId = 2, Descripcion = "Sopa", Precio = 5.50M });
                await db.SaveChangesAsync();

                await db.Productos.AddAsync(new Productos() { DepartamentoId = 2, Descripcion = "Salsa de tomate", Precio = 25.50M });
                await db.SaveChangesAsync();

                await db.Productos.AddAsync(new Productos() { DepartamentoId = 3, Descripcion = "Tomate", Precio = 10.50M });
                await db.SaveChangesAsync();

                await db.Productos.AddAsync(new Productos() { DepartamentoId = 3, Descripcion = "Sandia", Precio = 5.50M });
                await db.SaveChangesAsync();

                await db.Productos.AddAsync(new Productos() { DepartamentoId = 3, Descripcion = "Fresas", Precio = 25.50M });
                await db.SaveChangesAsync();

                await db.Productos.AddAsync(new Productos() { DepartamentoId = 4, Descripcion = "Modelo", Precio = 25.50M });
                await db.SaveChangesAsync();

                await db.Productos.AddAsync(new Productos() { DepartamentoId = 4, Descripcion = "Corona", Precio = 20.00M });
                await db.SaveChangesAsync();

                await db.Productos.AddAsync(new Productos() { DepartamentoId = 4, Descripcion = "Indio", Precio = 15.00M });
                await db.SaveChangesAsync();


            }

        }

    }
}
