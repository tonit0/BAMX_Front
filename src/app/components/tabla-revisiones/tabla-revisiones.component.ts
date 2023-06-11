import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  ID: number;
  Fecha: string;
  Hora: string;
  Conductor: string;
  Destiono: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ID: 1, Fecha: "12-19-2021", Hora: "21:00", Conductor: 'Homero', Destiono: "Los Mochis"},
  {ID: 1, Fecha: "12-19-2021", Hora: "21:00", Conductor: 'Homero', Destiono: "Los Mochis"},
  {ID: 1, Fecha: "12-19-2021", Hora: "21:00", Conductor: 'Homero', Destiono: "Los Mochis"},
  {ID: 1, Fecha: "12-19-2021", Hora: "21:00", Conductor: 'Homero', Destiono: "Los Mochis"},
  {ID: 1, Fecha: "12-19-2021", Hora: "21:00", Conductor: 'Homero', Destiono: "Los Mochis"},
  {ID: 1, Fecha: "12-19-2021", Hora: "21:00", Conductor: 'Homero', Destiono: "Los Mochis"},
  {ID: 1, Fecha: "12-19-2021", Hora: "21:00", Conductor: 'Homero', Destiono: "Los Mochis"},
  {ID: 1, Fecha: "12-19-2021", Hora: "21:00", Conductor: 'Homero', Destiono: "Los Mochis"},
  {ID: 1, Fecha: "12-19-2021", Hora: "21:00", Conductor: 'Homero', Destiono: "Los Mochis"},
  {ID: 1, Fecha: "12-19-2021", Hora: "21:00", Conductor: 'Homero', Destiono: "Los Mochis"},
  {ID: 1, Fecha: "12-19-2021", Hora: "21:00", Conductor: 'Homero', Destiono: "Los Mochis"},
  {ID: 1, Fecha: "12-19-2021", Hora: "21:00", Conductor: 'Homero', Destiono: "Los Mochis"},
  {ID: 1, Fecha: "12-19-2021", Hora: "21:00", Conductor: 'Homero', Destiono: "Los Mochis"},

];

@Component({
  selector: 'app-tabla-revisiones',
  templateUrl: './tabla-revisiones.component.html',
  styleUrls: ['./tabla-revisiones.component.css']
})
export class TablaRevisionesComponent implements AfterViewInit {

  displayedColumns: string[] = ['ID', 'Fecha', 'Hora', 'Conductor', 'Destiono', 'Buttons'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
