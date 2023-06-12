import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Vehiculos } from 'src/app/models/vehiculo';
import { TablasService } from 'src/app/services/tablas.service';

@Component({
  selector: 'app-tabla-vehiculos',
  templateUrl: './tabla-vehiculos.component.html',
  styleUrls: ['./tabla-vehiculos.component.css'],
})

export class TablaVehiculosComponent implements AfterViewInit {

  constructor( private TableService: TablasService ) {

  }

  displayedColumns: string[] = ['ID', 'Marca', 'Modelo', 'Color', 'Placas', 'Buttons'];
  dataSource = new MatTableDataSource<Vehiculos>;
  data: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.obtenerVehiculos();
  }

  obtenerVehiculos(){
    this.TableService.getVehicles().subscribe({
      error: (error) => {
      },
      complete: () => {},
      next: (response) => {
        this.data = response;
        console.log( this.data[0].marca.nombre );
        this.dataSource = this.data;
      },
    });
  }

}
