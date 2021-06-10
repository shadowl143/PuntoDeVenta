import { Observable } from 'rxjs';
import { Departamento } from './../../../models/departamento';
import { Productos } from './../../../models/productos';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Contexto } from 'src/app/shared/api/contexto';
import { ServicioAlerta } from 'src/app/utilerias/alerta';
import { ActivatedRoute, GuardsCheckStart, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-forma',
  templateUrl: './forma.component.html',
  styleUrls: ['./forma.component.css']
})
export class FormaProductoComponent implements OnInit {

  departameto: Departamento[];
  modelo: Productos;
  id = 0;
  constructor(private formBuilder: FormBuilder, private ctx: Contexto, private alertas: ServicioAlerta, private router: ActivatedRoute,
    private nav: Router) {
    this.id = router.snapshot.params.id;
    console.log(this.id);
    if (this.id > 0) {
      this.ctx.productos().obtener(this.id).toPromise().then( rs => {
        this.modelo = rs.t;
        Object.assign(this.forma.value, this.modelo);
        this.forma.reset(this.forma.value);
      });
    }
  }
  forma: FormGroup;
  get f() { return this.forma.controls; }
  ngOnInit() {
    this.forma = this.formBuilder.group({
      id: [0],
      descripcion: ['', Validators.required],
      precio: [0, Validators.required],
      departamentoId: [0, Validators.required],
      departamentoDescripcion: [''],
    });
    this.cargarDepartamentos();
  }

  cargarDepartamentos() {
    this.ctx.productos().obenerDepartamentos().toPromise().then(e => {
      if (e.estatus) {
        this.departameto = e.t;
      }
    });
  }
  guardar() {
    if (this.forma.valid) {
      const modelo = this.forma.value as Productos;
      if (this.id == 0) {
        this.ctx.productos().guardar(modelo).toPromise().then(e => {
          if (e.estatus && e.t != null) {
            this.alertas.mostrarExito('Se guardo con éxito');
            this.nav.navigate(['Productos']);
          } else {
            this.alertas.mostrarAdvertencia('El producto ya se encuentra registrado');
          }
        });
      } else {
        this.ctx.productos().actualizar(this.id, modelo).toPromise().then(e => {
          if (e.estatus) {
            this.alertas.mostrarExito('Se actualizó con éxito');
            this.nav.navigate(['/Productos']);
          } else {
            this.alertas.mostrarAdvertencia('No fue posible actualizar el producto');
          }

        });
      }
    } else {
      this.alertas.mostrarAdvertencia('Formulario invalido');
    }
  }
  cambiarDepartamento(id: number) {
    console.log(id);
    this.f['departamentoId'].setValue(id);
  }

  cerrar() {
    this.nav.navigate(['/Productos']);
  }

}
