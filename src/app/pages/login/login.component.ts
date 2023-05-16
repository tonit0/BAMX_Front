import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  private navegar(): void {
    this.router.navigateByUrl('/inicio');
  }

  ingresar(event: Event): void {
    event.preventDefault(); // Evita que se recargue la página

    this.navegar();
  }
}
