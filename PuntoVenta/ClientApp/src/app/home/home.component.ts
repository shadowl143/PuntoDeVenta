import { Usuarios } from './../shared/models/usuario';
import { GuardsCheckStart } from '@angular/router';
import { Contexto } from 'src/app/shared/api/contexto';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { ServicioAlerta } from '../utilerias/alerta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  forma: FormGroup;
  get f() { return this.forma.controls; }
  constructor(private ctx: Contexto, private formBuilder: FormBuilder, private alertas: ServicioAlerta) {

  }

  ngOnInit(): void {
    this.forma = this.formBuilder.group({
      id: [0],
      nombreUsuario: [''],
      contrasena: [''],
      tipoUsuarioDescripcion: [''],
      tipoUsuarioId: [0],
    });
  }
  guardar() {
    const model = this.forma.value as Usuarios;
    this.ctx.usuario().obtenerUsuario(model).toPromise().then( e => {
      if (e.estatus && e.t !== null){
        localStorage.setItem('usuario', JSON.stringify(e.t));
        this.alertas.mostrarExiste('Se asigno un usario');
        console.log(e.t)
      } else {
        this.alertas.mostrarError('No se encontro usuario');
      }
    });
  }

}
