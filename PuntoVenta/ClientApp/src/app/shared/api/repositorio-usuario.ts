import { VentaCompleta } from './../models/venta-completa';
import { SubVentas } from './../models/sub-venta';
import { Respuesta } from './../models/repuesta';
import { HttpClient } from '@angular/common/http';
import { Repositorio } from './repositorio';

import { Observable } from 'rxjs';
import { Productos } from '../models/productos';
import { Venta } from '../models/venta';
import { VentasComponent } from '../component/ventas/ventas.component';
import { Usuarios } from '../models/usuario';

export class RepositorioUsuario extends Repositorio<Usuarios> {
  constructor(http: HttpClient) {
    super(http, 'Usuarios');
  }
  obtenerUsuario(model: Usuarios): Observable<Respuesta> {
    const ruta = `${this.Ruta}/ObtenerCredencial`;
    return this.ClienteHttp.post<Respuesta>(ruta, model);
  }


}
