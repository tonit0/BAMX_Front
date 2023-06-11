import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  ID: number;
  Marca: string;
  Modelo: string;
  Color: string;
  Placas: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},

];

@Component({
  selector: 'app-tabla-vehiculos',
  templateUrl: './tabla-vehiculos.component.html',
  styleUrls: ['./tabla-vehiculos.component.css'],
})

export class TablaVehiculosComponent implements AfterViewInit {

  displayedColumns: string[] = ['ID', 'Marca', 'Modelo', 'Color', 'Placas', 'Buttons'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
