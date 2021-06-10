import { SubVentas } from './../../models/sub-venta';
import { VentaCompleta } from './../../models/venta-completa';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioAlerta } from 'src/app/utilerias/alerta';
import { Contexto } from '../../api/contexto';
import { Venta } from '../../models/venta';

@Component({
  selector: 'app-verventadetalle',
  templateUrl: './verventadetalle.component.html',
  styleUrls: ['./verventadetalle.component.css']
})
export class VerventadetalleComponent implements OnInit {
  id: number;
  ventaCompleta: VentaCompleta;
  venta: Venta;
  subVentas: SubVentas[] = [];
  importe = 0;
  cantidad = 0;
  fecha: Date;
  constructor(private formBuilder: FormBuilder, private ctx: Contexto, private alertas: ServicioAlerta, private router: ActivatedRoute,
    private nav: Router) {
    this.id = router.snapshot.params.id;
    if (this.id > 0) {
      this.ctx.venta().ventaDetalle(this.id).toPromise().then(rs => {
        this.ventaCompleta = rs.t;
        console.log(this.ventaCompleta);
        this.subVentas = this.ventaCompleta.subVentas;
        this.importe = this.ventaCompleta.venta.importeTotal;
        this.cantidad = this.ventaCompleta.venta.cantidadProductos;
        this.fecha = this.ventaCompleta.venta.fecha;
      });
    }
  }

  ngOnInit() {
  }
  regresar() {
    this.nav.navigate(['/Ventas']);
  }
}
