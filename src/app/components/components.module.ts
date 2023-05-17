import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuarioConfiguracionesComponent } from './usuario-configuraciones/usuario-configuraciones.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EncabezadoComponent,
    NavbarComponent,
    UsuarioConfiguracionesComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    EncabezadoComponent,
    NavbarComponent,
  ]
})
export class ComponentsModule { }
