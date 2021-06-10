import { SubVentas } from './sub-venta';
import { Venta } from './venta';

export interface VentaCompleta {
  venta: Venta;
  subVentas: SubVentas[];
}
