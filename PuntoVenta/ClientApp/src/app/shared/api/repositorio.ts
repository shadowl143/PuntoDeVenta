import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Respuesta } from '../models/repuesta';

export abstract class Repositorio<T> {
  private readonly ruta: string;
  get Ruta() {
    return this.ruta;
  }

  get ClienteHttp() {
    return this.http;
  }

  constructor(private http: HttpClient, controlador: string) {
    this.ruta = '/api/' + controlador;
  }

  obtener(id: number): Observable<Respuesta> {
    const httpHeaders: HttpHeaders = this.getHeaders();
    return this.http.get<Respuesta>(`${this.ruta}/${id}`);
  }

  obtenerTodos(): Observable<Respuesta> {
    const httpHeaders: HttpHeaders = this.getHeaders();
    console.log(httpHeaders);
    return this.http.get<Respuesta>(this.ruta);
  }

  guardar(entidad: T): Observable<Respuesta> {
    const httpHeaders: HttpHeaders = this.getHeaders();
    return this.http.post<Respuesta>(this.ruta, entidad);
  }

  actualizar(id: number, entidad: T): Observable<Respuesta> {
    const httpHeaders: HttpHeaders = this.getHeaders();
    const ruta = this.ruta + '/' + id;
    return this.http.put<Respuesta>(ruta, entidad);
  }

  eliminar(id: number): Observable<boolean> {
    const httpHeaders: HttpHeaders = this.getHeaders();
    const ruta = this.ruta + '/' + id;
    return this.http.delete<boolean>(ruta);
  }

  getHeaders(): HttpHeaders {
    const httpHeaders: HttpHeaders = new HttpHeaders();

    // const token = this.securityService.GetToken();
    // if (token) {
    //   httpHeaders = httpHeaders.append('Authorization', 'Bearer ' + token);
    // }

    return httpHeaders;
  }
}
