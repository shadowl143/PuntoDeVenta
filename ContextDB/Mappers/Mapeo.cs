using AutoMapper;
using ContextDB.Models;
using ContextDB.ModelsVm;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ContextDB.Mappers
{
    class Mapeo : Profile
    {
        public Mapeo()
        {
            CreateMap<Departamento, DepartamentoVM>();
            CreateMap<DepartamentoVM, Departamento>();

            CreateMap<Productos, ProductosVm>()
                .ForMember(e => e.DepartamentoDescripcion, mo => mo.MapFrom(m => m.Departamento.Descripcion));
            CreateMap<DepartamentoVM, Departamento>();

            CreateMap<Usuarios, UsuariosVm>()
                .ForMember(e => e.TipoUsuarioDescripcion, mo => mo.MapFrom(m => m.TipoUsuario.Descripcion));
            CreateMap<UsuariosVm, Usuarios>();

            CreateMap<SubVenta, SubVentasVm>();
            CreateMap<SubVentasVm, SubVenta>();

            CreateMap<Venta, VentaVm>()
                .ForMember(e => e.UsuarioDescripcion, mo => mo.MapFrom(m => m.Usuarios.NombreUsuario))
                .ForMember(e => e.TipoUsuarioDescripcion, mo => mo.MapFrom(m => m.Usuarios.TipoUsuario.Descripcion));
            CreateMap<VentaVm, Venta>();

        }
    }
}
