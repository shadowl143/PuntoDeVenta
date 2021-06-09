import { Productos } from './../../models/productos';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { Contexto } from '../../api/contexto';
import { FormaProductoComponent } from './forma/forma.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'departamento', 'precio', 'editar'];
  dataSource = new MatTableDataSource<Productos>([]);
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(private ctx: Contexto, private ventana: MatDialog) { }

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
  abrirVentana(row: Productos) {
    const dato = row.id;
    this.ventana.open(FormaProductoComponent, { data: dato });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
