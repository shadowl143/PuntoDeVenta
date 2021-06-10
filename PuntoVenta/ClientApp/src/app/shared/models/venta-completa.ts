import { SubVentas } from './sub-venta';
import { Venta } from './venta';

export class VentaCompleta {
  venta: Venta;
  subVentas: SubVentas[];
}
