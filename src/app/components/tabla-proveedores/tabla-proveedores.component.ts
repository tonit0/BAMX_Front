import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


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

export class TablaProveedoresComponent implements AfterViewInit {

  tipo: boolean = false;

  displayedColumns: string[] = ['ID', 'Nombre', 'Telefono', 'RFC', 'Buttons'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  hide_this( now: boolean ) {

    this.tipo = now;

  }
  

}

