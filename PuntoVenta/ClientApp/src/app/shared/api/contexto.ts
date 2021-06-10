import { RepositorioUsuario } from './repositorio-usuario';
import { RepositorioVenta } from './repositorio-venta';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RepositorioProductos } from './repositorio-productos';

@Injectable({
  providedIn: 'root',
})
export class Contexto {

  private repoProductos: RepositorioProductos;
  private repoVenta: RepositorioVenta;
  private repoUsuario: RepositorioUsuario;

  constructor(cliente: HttpClient) {
    this.repoProductos = new RepositorioProductos(cliente);
    this.repoVenta = new RepositorioVenta(cliente);
    this.repoUsuario = new RepositorioUsuario(cliente);
  }

  public productos(): RepositorioProductos {
    return this.repoProductos;
  }

  public venta(): RepositorioVenta {
    return this.repoVenta;
  }
  public usuario(): RepositorioUsuario {
    return this.repoUsuario;
  }

}
