import { Component } from '@angular/core';

export interface PeriodicElement {
  ID: number;
  Nombre: string;
  Primer_Apellido: string;
  Telefono: number;
  Puesto: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ID: 1, Nombre: 'Algo', Primer_Apellido: 'Perez', Telefono: 1234567890, Puesto: 'empleado'},
  {ID: 1, Nombre: 'Algo', Primer_Apellido: 'Perez', Telefono: 1234567890, Puesto: 'empleado'},
  {ID: 1, Nombre: 'Algo', Primer_Apellido: 'Perez', Telefono: 1234567890, Puesto: 'empleado'},
  {ID: 1, Nombre: 'Algo', Primer_Apellido: 'Perez', Telefono: 1234567890, Puesto: 'empleado'},
  {ID: 1, Nombre: 'Algo', Primer_Apellido: 'Perez', Telefono: 1234567890, Puesto: 'empleado'},
  {ID: 1, Nombre: 'Algo', Primer_Apellido: 'Perez', Telefono: 1234567890, Puesto: 'empleado'},
  {ID: 1, Nombre: 'Algo', Primer_Apellido: 'Perez', Telefono: 1234567890, Puesto: 'empleado'},
  {ID: 1, Nombre: 'Algo', Primer_Apellido: 'Perez', Telefono: 1234567890, Puesto: 'empleado'},
  {ID: 1, Nombre: 'Algo', Primer_Apellido: 'Perez', Telefono: 1234567890, Puesto: 'empleado'},
  {ID: 1, Nombre: 'Algo', Primer_Apellido: 'Perez', Telefono: 1234567890, Puesto: 'empleado'},
  {ID: 1, Nombre: 'Algo', Primer_Apellido: 'Perez', Telefono: 1234567890, Puesto: 'empleado'},
  {ID: 1, Nombre: 'Algo', Primer_Apellido: 'Perez', Telefono: 1234567890, Puesto: 'empleado'},
  {ID: 1, Nombre: 'Algo', Primer_Apellido: 'Perez', Telefono: 1234567890, Puesto: 'empleado'},
  {ID: 1, Nombre: 'Algo', Primer_Apellido: 'Perez', Telefono: 1234567890, Puesto: 'empleado'},
  {ID: 1, Nombre: 'Algo', Primer_Apellido: 'Perez', Telefono: 1234567890, Puesto: 'empleado'},
  {ID: 1, Nombre: 'Algo', Primer_Apellido: 'Perez', Telefono: 1234567890, Puesto: 'empleado'},
  {ID: 1, Nombre: 'Algo', Primer_Apellido: 'Perez', Telefono: 1234567890, Puesto: 'empleado'},

];

@Component({
  selector: 'app-tabla-empleados',
  templateUrl: './tabla-empleados.component.html',
  styleUrls: ['./tabla-empleados.component.css']
})
export class TablaEmpleadosComponent {

  displayedColumns: string[] = ['ID', 'Nombre', 'Primer_Apellido', 'Telefono', 'Puesto', 'Buttons'];
  dataSource = ELEMENT_DATA;


}
