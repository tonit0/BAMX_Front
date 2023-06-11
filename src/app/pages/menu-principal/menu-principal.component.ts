import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent {
  
  constructor(private router: Router) {}

  private navegar( where: string ): void {
    this.router.navigateByUrl('/' + where);
  }

  cambiarPagina(event: Event, where: string): void {
    event.preventDefault(); // Evita que se recargue la página

    this.navegar( where );
  }

}
