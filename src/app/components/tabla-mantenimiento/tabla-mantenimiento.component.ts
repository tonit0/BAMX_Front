import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { mantenimiento } from 'src/app/models/mantenimiento';
import { TablasService } from 'src/app/services/tablas.service';

@Component({
  selector: 'app-tabla-mantenimiento',
  templateUrl: './tabla-mantenimiento.component.html',
  styleUrls: ['./tabla-mantenimiento.component.css']
})
export class TablaMantenimientoComponent implements AfterViewInit {

  constructor( private TableService: TablasService ) {}

  displayedColumns: string[] = ['ID', 'Tipo', 'Proveedor', 'Fecha', 'Buttons'];
  dataSource = new MatTableDataSource<mantenimiento>;
  data: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.obtenerMantenimiento();
  }

  obtenerMantenimiento(){
    this.TableService.getMaintenances().subscribe({
      error: (error) => {
      },
      complete: () => {},
      next: (response) => {
        this.data = response;
        console.log( this.data ) ;
        this.dataSource = this.data;
      },
    });
  }

}
