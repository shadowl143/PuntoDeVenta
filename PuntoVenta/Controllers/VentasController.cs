﻿using AutoMapper;
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
    public class VentasController : ControllerBase
    {

        private readonly IMapper mapper;
        private readonly Contexto ctx;


        public VentasController(IMapper mapper, Contexto ctx)
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
                var ventas = this.mapper.Map<ICollection<VentaVm>>(await this.ctx.Ventas.ToListAsync());
                resultado = new RespuestaVm() { Estatus = true, Mensaje = "Lista de usuarios", T = ventas };
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
                var Venta = this.mapper.Map<VentaVm>(await this.ctx.Ventas.Where(e => e.Id == id).FirstOrDefaultAsync());
                var detalleVenta = this.mapper.Map<ICollection<SubVentasVm>>(await this.ctx.SubVentas.Where(e => e.VentaId == id).ToListAsync());
                var enviarDetalleVenta = new VentaCompletaVm() { VentaVm = Venta, SubVentas = detalleVenta.ToList() };
                resultado = new RespuestaVm() { Estatus = true, Mensaje = "Lista de usuarios", T = enviarDetalleVenta };
            }
            catch (Exception ex)
            {
                resultado = new RespuestaVm() { Estatus = false, Mensaje = ex.Message, T = false };
            }

            return resultado;
        }

        [HttpPost]
        public RespuestaVm Guardar(VentaCompletaVm model)
        {
            RespuestaVm resultado;
            try
            {
                decimal sumaTotal = 0.00M;
                var totalProductos = 0;
                sumaTotal = model.SubVentas.Sum(e => e.Importe);
                totalProductos = model.SubVentas.Sum(e => e.Cantidad);

                Venta ingresarVenta = new Venta()
                {
                    CantidadProductos = totalProductos,
                    ImporteTotal = sumaTotal,
                    Fecha = DateTime.Now,
                    UsuarioId = model.VentaVm.UsuarioId
                };
                this.ctx.Ventas.Add(ingresarVenta);
                this.ctx.SaveChanges();
                var ultimoRegistro = this.ctx.Ventas.LastOrDefault();

                foreach (var productos in model.SubVentas)
                {
                    var prd = new SubVenta()
                    {
                        Cantidad = productos.Cantidad,
                        Importe = productos.Importe,
                        VentaId = ultimoRegistro.Id,
                        ProductoId = productos.ProductoId
                    };
                    this.ctx.SubVentas.Add(prd);
                    this.ctx.SaveChanges();
                }
                resultado = new RespuestaVm() { Estatus = false, Mensaje = "ok", T = ingresarVenta };
            }
            catch (Exception ex)
            {
                resultado = new RespuestaVm() { Estatus = false, Mensaje = ex.Message, T = false };
            }

            return resultado;
        }

       
    }
}
