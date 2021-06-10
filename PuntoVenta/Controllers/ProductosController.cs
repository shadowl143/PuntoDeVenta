using AutoMapper;
using ContextDB.Models;
using ContextDB.ModelsVm;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PuntoVenta.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductosController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly Contexto ctx;
        

        public ProductosController(IMapper mapper, Contexto ctx)
        {
            this.mapper = mapper;
            this.ctx = ctx;
        }


        [HttpGet]
        public async Task<RespuestaVm> ObtenerTodos()
        {
            RespuestaVm resultado;
            try
            {
                var producto = this.mapper.Map<ICollection<ProductosVm>>(await this.ctx.Productos.Include(e => e.Departamento).ToListAsync());
                resultado = new RespuestaVm() { Estatus = true, Mensaje = "Lista de usuarios", T = producto };
            }
            catch (Exception ex)
            {
                resultado = new RespuestaVm() { Estatus = false, Mensaje = ex.Message, T = false };
            }

            return resultado;
        }

        [HttpGet("{id}")]
        public async Task<RespuestaVm> ObtenerId(int id)
        {
            RespuestaVm resultado;
            try
            {
                var producto = this.mapper.Map<ProductosVm>(await this.ctx.Productos.Include(e=>e.Departamento).Where(e => e.Id == id).FirstOrDefaultAsync());
                resultado = new RespuestaVm() { Estatus = true, Mensaje = "Lista de usuarios", T = producto };
            }
            catch (Exception ex)
            {
                resultado = new RespuestaVm() { Estatus = false, Mensaje = ex.Message, T = false };
            }

            return resultado;
        }

        [HttpPost]
        public async Task<RespuestaVm> Gurdar(ProductosVm model)
        {
            RespuestaVm resultado;
            try
            {
                if ( !this.Existe(model))
                {
                    Productos modelo = this.mapper.Map<Productos>(model);
                    modelo.Id = 0;
                    this.ctx.Productos.Add(modelo);
                    await this.ctx.SaveChangesAsync();
                    resultado = new RespuestaVm() { Estatus = true, Mensaje = "Ok", T = modelo };
                } else
                {
                    resultado = new RespuestaVm() { Estatus = true, Mensaje = "Existe", T = null };

                }
                
            }
            catch (Exception ex)
            {
                resultado = new RespuestaVm() { Estatus = false, Mensaje = ex.Message, T = false };
            }

            return resultado;
        }

        [HttpPut("{id}")]
        public async Task<RespuestaVm> Actualizar(int id,ProductosVm model)
        {
            RespuestaVm resultado;
            try
            {
                var modelo = this.ctx.Productos.Find(id);
                modelo.DepartamentoId = model.DepartamentoId;
                modelo.Descripcion = model.Descripcion;
                model.Precio = model.Precio;
                await this.ctx.SaveChangesAsync();
                resultado = new RespuestaVm() { Estatus = true, Mensaje = "Actualizado", T = modelo };
            }
            catch (Exception ex)
            {
                resultado = new RespuestaVm() { Estatus = false, Mensaje = ex.Message, T = false };
            }

            return resultado;
        }

        [HttpGet, Route("departamentos")]
        public async Task<RespuestaVm> ObtenerDepartamentos()
        {

            try
            {
                var departamentos = mapper.Map<ICollection<DepartamentoVM>>(await this.ctx.Departamentos.ToListAsync());
                return new RespuestaVm() { Estatus = true, Mensaje = "Ok", T = departamentos };
            }
            catch (Exception ex)
            {
                return new RespuestaVm() { Estatus = false, Mensaje = ex.Message, T = null };
                throw;
            }
        }

        private bool Existe(ProductosVm productos)
        {
            return this.ctx.Productos.Where(e => e.Descripcion == productos.Descripcion).Any();
        }

    }
}
