import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../components/components.module';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
    MenuPrincipalComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild([
      { path: '', component: MenuPrincipalComponent }
    ])
  ],
  exports: [RouterModule]
})
export class PagesModule { }
