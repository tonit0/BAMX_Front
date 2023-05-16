import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    EncabezadoComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EncabezadoComponent
  ]
})
export class ComponentsModule { }
