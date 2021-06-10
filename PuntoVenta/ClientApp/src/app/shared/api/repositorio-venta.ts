import { VentaCompleta } from './../models/venta-completa';
import { SubVentas } from './../models/sub-venta';
import { Respuesta } from './../models/repuesta';
import { HttpClient } from '@angular/common/http';
import { Repositorio } from './repositorio';

import { Observable } from 'rxjs';
import { Productos } from '../models/productos';
import { Venta } from '../models/venta';
import { VentasComponent } from '../component/ventas/ventas.component';

export class RepositorioVenta extends Repositorio<Venta> {
    constructor(http: HttpClient) {
      super(http, 'Ventas');
    }

    guadarVenta(modelo: SubVentas[]): Observable<Respuesta> {
      const ruta = `${this.Ruta}/GuardarVenta`;
      return this.ClienteHttp.post<Respuesta>(ruta, modelo);
    }
  }
