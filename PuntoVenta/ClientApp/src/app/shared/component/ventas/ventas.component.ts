import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { Contexto } from '../../api/contexto';
import { Venta } from '../../models/venta';
import { NuevaventaComponent } from '../nuevaventa/nuevaventa.component';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  displayedColumns: string[] = ['importe', 'productos', 'fecha', 'usuario' ];
  dataSource = new MatTableDataSource<Venta>([]);
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  constructor(private ctx: Contexto, private ventana: MatDialog) { }

  ngOnInit() {
  }

  tabla() {
    this.ctx.venta().obtenerTodos().toPromise().then(e => {
      if (e.estatus) {
        this.dataSource = new MatTableDataSource(e.t);
        this.dataSource.paginator = this.paginator;
      }
    });
  }
  abrirVentana(row: Venta) {
    const dato = row.id;
    this.ventana.open(NuevaventaComponent, { data: dato });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
