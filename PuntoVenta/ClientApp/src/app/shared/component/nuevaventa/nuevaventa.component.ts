import { VentaCompleta } from './../../models/venta-completa';
import { Contexto } from './../../api/contexto';
import { Productos } from './../../models/productos';
import { SubVentas } from './../../models/sub-venta';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-nuevaventa',
  templateUrl: './nuevaventa.component.html',
  styleUrls: ['./nuevaventa.component.css']
})
export class NuevaventaComponent implements OnInit {

  totalVenta = 0;
  forma: FormGroup;
  listaVenta: SubVentas[] = [];
  precioProducto = 0;
  get f() { return this.forma.controls; }
  productosFiltrados: Observable<Productos[]>;
  productosSinFiltrar: Productos[];
  productosfiltro = new FormControl();
  modeloVentaCompleta: VentaCompleta;

  constructor(private formBuilder: FormBuilder, private ctx: Contexto) { }

  ngOnInit() {
    this.forma = this.formBuilder.group({
      id: [0],
      productoDescripcion: [''],
      productoId: [0],
      cantidad: [0],
      importe: [0],
    });
    this.cargarProductos();
  }

  agregarProductos() {

  }

  eliminarProductos() {

  }

  guardar() {

    console.log(this.listaVenta)
    this.ctx.venta().guadarVenta(this.listaVenta).toPromise().then( e => {

    }).catch(e=>{
      console.log(e);
    })
  }
  agregarLista() {
    if (this.forma.valid) {
      const modelo = this.forma.value as SubVentas;
      const lista = this.listaVenta.find(e => e.productoDescripcion === modelo.productoDescripcion);
      if (lista === undefined) {
        modelo.importe = this.precioProducto * modelo.cantidad;
        this.totalVenta += modelo.importe;
       this.listaVenta.push(modelo);
      } else {
        this.totalVenta -=  lista.cantidad * this.precioProducto;
        lista.cantidad = (+modelo.cantidad + +lista.cantidad);

        lista.importe = lista.cantidad * this.precioProducto;
        this.totalVenta += lista.importe;
      }

    }
  }

  cargarProductos() {
    this.ctx.productos().obtenerTodos().toPromise().then(resultado => {
      this.productosSinFiltrar = resultado.t;
      this.productosFiltrados = this.productosfiltro.valueChanges
        .pipe(
          startWith<string | Productos>(''),
          map(t => typeof t === 'string' ? t : t == null ? '' : t.descripcion),
          map(t => this.filtrarProceso(t))

        );
    }).catch(e => {
      console.log(e);
    });
  }

  limpiarFiltroProductos(): void {
    this.f['productoDescripcion'].setValue('');
    this.f['productoId'].setValue(null);
    this.cargarProductos();
  }

  productosSeleccionado(modelo: Productos) {
    this.f['productoDescripcion'].setValue(modelo.descripcion);
    this.f['productoId'].setValue(modelo.id);
    this.precioProducto = modelo.precio;

  }

  private filtrarProceso(modelo: string): Productos[] {
    const valorFiltro = modelo.toLowerCase();
    const filtro = this.productosSinFiltrar.filter(t => t.descripcion.toLowerCase().indexOf(valorFiltro) === 0);
    return filtro;
  }

  cerrar() {

  }
}
