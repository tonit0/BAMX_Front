import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


export interface PeriodicElement {
  ID: number;
  Tipo: string;
  Proveedor: string;
  Fecha: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ID: 1, Tipo: 'Algo', Proveedor: 'Algo 2.0', Fecha: '19-12-2021'},
  {ID: 1, Tipo: 'Algo', Proveedor: 'Algo 2.0', Fecha: '19-12-2021'},
  {ID: 1, Tipo: 'Algo', Proveedor: 'Algo 2.0', Fecha: '19-12-2021'},
  {ID: 1, Tipo: 'Algo', Proveedor: 'Algo 2.0', Fecha: '19-12-2021'},
  {ID: 1, Tipo: 'Algo', Proveedor: 'Algo 2.0', Fecha: '19-12-2021'},
  {ID: 1, Tipo: 'Algo', Proveedor: 'Algo 2.0', Fecha: '19-12-2021'},
  {ID: 1, Tipo: 'Algo', Proveedor: 'Algo 2.0', Fecha: '19-12-2021'},
  {ID: 1, Tipo: 'Algo', Proveedor: 'Algo 2.0', Fecha: '19-12-2021'},
  {ID: 1, Tipo: 'Algo', Proveedor: 'Algo 2.0', Fecha: '19-12-2021'},
  {ID: 1, Tipo: 'Algo', Proveedor: 'Algo 2.0', Fecha: '19-12-2021'},
];

@Component({
  selector: 'app-tabla-mantenimiento',
  templateUrl: './tabla-mantenimiento.component.html',
  styleUrls: ['./tabla-mantenimiento.component.css']
})
export class TablaMantenimientoComponent implements AfterViewInit {

  displayedColumns: string[] = ['ID', 'Tipo', 'Proveedor', 'Fecha', 'Buttons'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}
