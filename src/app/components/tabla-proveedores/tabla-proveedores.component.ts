import { Component } from '@angular/core';

export interface PeriodicElement {
  ID: number;
  Nombre: string;
  Telefono: number;
  RFC: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ID: 1, Nombre: 'Algo', Telefono: 1234567890, RFC: 'sakjdhasldg12312'},
  {ID: 1, Nombre: 'Algo', Telefono: 1234567890, RFC: 'sakjdhasldg12312'},
  {ID: 1, Nombre: 'Algo', Telefono: 1234567890, RFC: 'sakjdhasldg12312'},
  {ID: 1, Nombre: 'Algo', Telefono: 1234567890, RFC: 'sakjdhasldg12312'},
  {ID: 1, Nombre: 'Algo', Telefono: 1234567890, RFC: 'sakjdhasldg12312'},
  {ID: 1, Nombre: 'Algo', Telefono: 1234567890, RFC: 'sakjdhasldg12312'},
  {ID: 1, Nombre: 'Algo', Telefono: 1234567890, RFC: 'sakjdhasldg12312'},
  {ID: 1, Nombre: 'Algo', Telefono: 1234567890, RFC: 'sakjdhasldg12312'},
  {ID: 1, Nombre: 'Algo', Telefono: 1234567890, RFC: 'sakjdhasldg12312'},
  {ID: 1, Nombre: 'Algo', Telefono: 1234567890, RFC: 'sakjdhasldg12312'},
  {ID: 1, Nombre: 'Algo', Telefono: 1234567890, RFC: 'sakjdhasldg12312'},
  {ID: 1, Nombre: 'Algo', Telefono: 1234567890, RFC: 'sakjdhasldg12312'},
  {ID: 1, Nombre: 'Algo', Telefono: 1234567890, RFC: 'sakjdhasldg12312'},
  {ID: 1, Nombre: 'Algo', Telefono: 1234567890, RFC: 'sakjdhasldg12312'},
];


@Component({
  selector: 'app-tabla-proveedores',
  templateUrl: './tabla-proveedores.component.html',
  styleUrls: ['./tabla-proveedores.component.css']
})

export class TablaProveedoresComponent {

  tipo: boolean = false;

  displayedColumns: string[] = ['ID', 'Nombre', 'Telefono', 'RFC', 'Buttons'];
  dataSource = ELEMENT_DATA;

  hide_this( now: boolean ) {

    this.tipo = now;

  }
  

}

