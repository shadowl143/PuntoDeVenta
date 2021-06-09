import { HttpClient } from '@angular/common/http';
import { Repositorio } from './repositorio';

import { Observable } from 'rxjs';
import { Productos } from '../models/productos';
import { Venta } from '../models/venta';

export class RepositorioVenta extends Repositorio<Venta> {
    constructor(http: HttpClient) {
      super(http, 'Ventas');
    }
  }
