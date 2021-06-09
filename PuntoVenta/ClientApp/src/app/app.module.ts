import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ProductosComponent } from './shared/component/productos/productos.component';
import { FormaProductoComponent } from './shared/component/productos/forma/forma.component';
import { VentasComponent } from './shared/component/ventas/ventas.component';
import { NuevaventaComponent } from './shared/component/nuevaventa/nuevaventa.component';
import { MatAutocompleteModule, MatButtonModule, MatDialogModule, MatDividerModule, MatExpansionModule,
   MatFormFieldModule, MatIconModule, MatInputModule,
   MatMenuModule, MatPaginatorModule, MatRadioModule, MatSelectModule, MatSnackBarModule, MatStepperModule, MatTableModule,
   MatTabsModule,
   MatToolbarModule, MatTooltipModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicioAlerta } from './utilerias/alerta';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ProductosComponent,
    FormaProductoComponent,
    VentasComponent,
    NuevaventaComponent
  ],
  entryComponents: [
    FormaProductoComponent,
    NuevaventaComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'Productos', component: ProductosComponent },
      { path: 'Ventas', component: VentasComponent },
    ]),
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatDividerModule,
    MatExpansionModule,
    MatStepperModule,
    MatTabsModule,
    MatSelectModule,
    MatRadioModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  providers: [
    ServicioAlerta,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
