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

  constructor(cliente: HttpClient) {
    this.repoProductos = new RepositorioProductos(cliente);
    this.repoVenta = new RepositorioVenta(cliente);
  }

  public productos(): RepositorioProductos {
    return this.repoProductos;
  }

  public venta(): RepositorioVenta {
    return this.repoVenta;
  }

}
