import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-nuevaventa',
  templateUrl: './nuevaventa.component.html',
  styleUrls: ['./nuevaventa.component.css']
})
export class NuevaventaComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: string, private ventana: MatDialogRef<NuevaventaComponent>) { }

  ngOnInit() {
  }

}
