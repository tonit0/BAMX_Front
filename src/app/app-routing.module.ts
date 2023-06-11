import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TablaVehiculosComponent } from './components/tabla-vehiculos/tabla-vehiculos.component';
import { TablaMantenimientoComponent } from './components/tabla-mantenimiento/tabla-mantenimiento.component';
import { TablaRevisionesComponent } from './components/tabla-revisiones/tabla-revisiones.component';
import { TablaProveedoresComponent } from './components/tabla-proveedores/tabla-proveedores.component';
import { TablaEmpleadosComponent } from './components/tabla-empleados/tabla-empleados.component';
import { TablaFallasComponent } from './components/tabla-fallas/tabla-fallas.component';
import { MenuPrincipalComponent } from './pages/menu-principal/menu-principal.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'inicio',
    component: MenuPrincipalComponent,
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: 'vehiculos',
        component: TablaVehiculosComponent,
      },
      {
        path: 'mantenimiento',
        component: TablaMantenimientoComponent,
      },
      {
        path: 'revisiones',
        component: TablaRevisionesComponent,
      },
      {
        path: 'proveedores',
        component: TablaProveedoresComponent,
      },
      {
        path: 'empleados',
        component: TablaEmpleadosComponent,
      },
      {
        path: 'fallas',
        component: TablaFallasComponent,
      },
    ],
  },
  {
    path: 'navbar',
    component: NavbarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
