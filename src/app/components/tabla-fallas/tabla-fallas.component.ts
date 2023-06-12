import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { falla } from 'src/app/models/fallas';
import { TablasService } from 'src/app/services/tablas.service';

@Component({
  selector: 'app-tabla-fallas',
  templateUrl: './tabla-fallas.component.html',
  styleUrls: ['./tabla-fallas.component.css']
})
export class TablaFallasComponent implements AfterViewInit {

  constructor( private TableService: TablasService ) {}

  tipo: boolean = false;

  displayedColumns: string[] = ['ID', 'Vehiculo', 'Preferencia', 'Fecha', 'Estatus', 'Buttons'];
  dataSource = new MatTableDataSource<falla>;
  data: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.obtenerFallas();
  }

  hide_this( now: boolean ) {

    this.tipo = now;

  }

  obtenerFallas(){
    this.TableService.getFailures().subscribe({
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
