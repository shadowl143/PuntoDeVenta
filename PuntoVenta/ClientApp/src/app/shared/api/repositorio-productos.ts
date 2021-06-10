import { HttpClient } from '@angular/common/http';
import { Repositorio } from './repositorio';

import { Observable } from 'rxjs';
import { Productos } from '../models/productos';
import { Respuesta } from '../models/repuesta';

export class RepositorioProductos extends Repositorio<Productos> {
    constructor(http: HttpClient) {
      super(http, 'Productos');
    }

    obenerDepartamentos(): Observable<Respuesta>{
      const ruta = `${this.Ruta}/departamentos`;
      return this.ClienteHttp.get<Respuesta>(ruta);
    }
  }
