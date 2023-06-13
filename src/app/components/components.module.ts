import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuarioConfiguracionesComponent } from './usuario-configuraciones/usuario-configuraciones.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { TablaVehiculosComponent } from './tabla-vehiculos/tabla-vehiculos.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TablaMantenimientoComponent } from './tabla-mantenimiento/tabla-mantenimiento.component';
import { TablaRevisionesComponent } from './tabla-revisiones/tabla-revisiones.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OverlayModule } from '@angular/cdk/overlay';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { TablaProveedoresComponent } from './tabla-proveedores/tabla-proveedores.component';
import { TablaEmpleadosComponent } from './tabla-empleados/tabla-empleados.component';
import { TablaFallasComponent } from './tabla-fallas/tabla-fallas.component';
import { TablaRutasComponent } from './tabla-rutas/tabla-rutas.component';


@NgModule({
  declarations: [
    EncabezadoComponent,
    NavbarComponent,
    UsuarioConfiguracionesComponent,
    TablaVehiculosComponent,
    TablaMantenimientoComponent,
    TablaRevisionesComponent,
    TablaProveedoresComponent,
    TablaEmpleadosComponent,
    TablaFallasComponent,
    TablaRutasComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    MatPaginatorModule,
    MatTableModule,
    MatTooltipModule,
    OverlayModule,
    ScrollingModule,
    MatDialogModule,
    MatMenuModule,
    ReactiveFormsModule
  ],
  exports: [
    EncabezadoComponent,
    NavbarComponent,
    TablaVehiculosComponent
  ]
})
export class ComponentsModule { }
