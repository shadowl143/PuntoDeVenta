import { Productos } from './../../../models/productos';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Contexto } from 'src/app/shared/api/contexto';
import { ServicioAlerta } from 'src/app/utilerias/alerta';
import { GuardsCheckStart } from '@angular/router';

@Component({
  selector: 'app-forma',
  templateUrl: './forma.component.html',
  styleUrls: ['./forma.component.css']
})
export class FormaProductoComponent implements OnInit {

  modelo: Productos;
  constructor(private formBuilder: FormBuilder, private ctx: Contexto, @Inject(MAT_DIALOG_DATA) public data: any,
  public ventana: MatDialogRef<FormaProductoComponent>, private alertas: ServicioAlerta) {
    // if (data > 0) {
    //   this.ctx.productos().obtener(data).toPromise().then( rs => {
    //     this.modelo = rs.t;
    //     Object.assign(this.forma.value, this.modelo);
    //     this.forma.reset(this.forma.value);
    //   });
    // }
  }
  forma: FormGroup;
  get f() { return this.forma.controls; }
  ngOnInit() {
    this.forma = this.formBuilder.group({
      id: [0],
      descripcion: ['', Validators.required],
      precio: [0, Validators.required],
      departamentoId: [0, Validators.required],
      departamentoDescripcion: ['', Validators.required],
    })
  }

  guardar() {

  }

  cerrar() {
    this.ventana.close();
  }

}
