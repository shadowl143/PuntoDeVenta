import { HttpClient } from '@angular/common/http';
import { Repositorio } from './repositorio';

import { Observable } from 'rxjs';
import { Productos } from '../models/productos';

export class RepositorioProductos extends Repositorio<Productos> {
    constructor(http: HttpClient) {
      super(http, 'Productos');
    }
  }
