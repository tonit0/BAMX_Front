import { Component } from '@angular/core';
import { faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-usuario-configuraciones',
  templateUrl: './usuario-configuraciones.component.html',
  styleUrls: ['./usuario-configuraciones.component.css']
})
export class UsuarioConfiguracionesComponent {
  faUser = faUser;
  faCaretDown = faCaretDown;
  usuario = "pedrito";
}
