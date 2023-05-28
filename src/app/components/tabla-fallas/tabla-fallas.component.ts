import { Component } from '@angular/core';

export interface PeriodicElement {
  ID: number;
  Vehiculo: string;
  Preferencia: string;
  Fecha: string;
  Estatus: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ID: 1, Vehiculo: "1231231asdas", Preferencia: "hoy", Fecha: '12-12-2022', Estatus: "Concluido"},
  {ID: 1, Vehiculo: "1231231asdas", Preferencia: "hoy", Fecha: '12-12-2022', Estatus: "Concluido"},
  {ID: 1, Vehiculo: "1231231asdas", Preferencia: "hoy", Fecha: '12-12-2022', Estatus: "Concluido"},
  {ID: 1, Vehiculo: "1231231asdas", Preferencia: "hoy", Fecha: '12-12-2022', Estatus: "Concluido"},
  {ID: 1, Vehiculo: "1231231asdas", Preferencia: "hoy", Fecha: '12-12-2022', Estatus: "Concluido"},
  {ID: 1, Vehiculo: "1231231asdas", Preferencia: "hoy", Fecha: '12-12-2022', Estatus: "Concluido"},
  {ID: 1, Vehiculo: "1231231asdas", Preferencia: "hoy", Fecha: '12-12-2022', Estatus: "Concluido"},
  {ID: 1, Vehiculo: "1231231asdas", Preferencia: "hoy", Fecha: '12-12-2022', Estatus: "Concluido"},
  {ID: 1, Vehiculo: "1231231asdas", Preferencia: "hoy", Fecha: '12-12-2022', Estatus: "Concluido"},
  {ID: 1, Vehiculo: "1231231asdas", Preferencia: "hoy", Fecha: '12-12-2022', Estatus: "Concluido"},
  {ID: 1, Vehiculo: "1231231asdas", Preferencia: "hoy", Fecha: '12-12-2022', Estatus: "Concluido"},
  {ID: 1, Vehiculo: "1231231asdas", Preferencia: "hoy", Fecha: '12-12-2022', Estatus: "Concluido"},
];

@Component({
  selector: 'app-tabla-fallas',
  templateUrl: './tabla-fallas.component.html',
  styleUrls: ['./tabla-fallas.component.css']
})
export class TablaFallasComponent {

  tipo: boolean = false;

  displayedColumns: string[] = ['ID', 'Vehiculo', 'Preferencia', 'Fecha', 'Estatus', 'Buttons'];
  dataSource = ELEMENT_DATA;

  hide_this( now: boolean ) {

    this.tipo = now;

  }

}
