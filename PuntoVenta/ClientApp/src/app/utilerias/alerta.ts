import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ServicioAlerta {
  constructor(public snackBar: MatSnackBar) {}

  mostrarExito(message: string): void {
    this.snackBar.open('✔️ ' + message, null, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  mostrarAdvertencia(message: string): void {
    this.snackBar.open('⚠️' + message, null, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  mostrarError(message: string): void {
    this.snackBar.open('❌ ' + message, null, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  mostrarExiste(message: string): void {
    this.snackBar.open('🖊️ ' + message, null, {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
