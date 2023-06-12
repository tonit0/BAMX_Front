import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { empleado } from 'src/app/models/empleado';
import { TablasService } from 'src/app/services/tablas.service';

@Component({
  selector: 'app-tabla-empleados',
  templateUrl: './tabla-empleados.component.html',
  styleUrls: ['./tabla-empleados.component.css']
})
export class TablaEmpleadosComponent implements AfterViewInit {

  constructor( private TableService: TablasService ) {}

  displayedColumns: string[] = ['ID', 'Nombre', 'Primer_Apellido', 'Telefono', 'Puesto', 'Buttons'];
  dataSource = new MatTableDataSource<empleado>;
  data: any;


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.obtenerEmpleado();
  }

  obtenerEmpleado(){
    this.TableService.getEmployees().subscribe({
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
