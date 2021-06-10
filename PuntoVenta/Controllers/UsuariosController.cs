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
    public class UsuariosController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly Contexto ctx;


        public UsuariosController(IMapper mapper, Contexto ctx)
        {
            this.mapper = mapper;
            this.ctx = ctx;
        }

        [HttpPost,Route("ObtenerCredencial")]
        public async Task<RespuestaVm> Credencial(UsuariosVm modelo)
        {
            try
            {
                var credencial = mapper.Map<UsuariosVm>(await this.ctx.Usuarios.Where(e => e.NombreUsuario == modelo.NombreUsuario && e.Contrasena == modelo.Contrasena).FirstOrDefaultAsync());
                if (credencial!=null)
                {
                    return new RespuestaVm() { Estatus = true, Mensaje = "Ok", T = credencial };

                }else
                {
                    return new RespuestaVm() { Estatus = true, Mensaje = "No encontrado", T = null };

                }
            }
            catch (Exception ex)
            {

                return new RespuestaVm() { Estatus = true, Mensaje = "Ok", T = null };
            }
        }

    }
}
