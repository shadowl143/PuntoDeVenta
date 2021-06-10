import { Usuarios } from './../../models/usuario';
import { Productos } from './../../models/productos';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { Contexto } from '../../api/contexto';
import { FormaProductoComponent } from './forma/forma.component';
import { Router } from '@angular/router';
import { ServicioAlerta } from 'src/app/utilerias/alerta';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'departamento', 'precio', 'editar'];
  dataSource = new MatTableDataSource<Productos>([]);
  usuario: Usuarios;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(private ctx: Contexto, private ventana: Router, private alertas: ServicioAlerta ) { }

  ngOnInit() {
    this.tabla();
  }
  tabla() {
    this.ctx.productos().obtenerTodos().toPromise().then(e => {
      if (e.estatus) {
        this.dataSource = new MatTableDataSource(e.t);
        this.dataSource.paginator = this.paginator;
      }
    });
  }
  abrirVentana(row: number) {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    if (this.usuario.tipoUsuarioId === 2) {
      const dato = row;
    this.ventana.navigate(['EditarProducto/' + dato]);
    } else {
      this.alertas.mostrarError('No tiene permisos para hacer movimientos en los productos')
    }

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
