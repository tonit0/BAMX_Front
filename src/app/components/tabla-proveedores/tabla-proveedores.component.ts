import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { proveedores } from 'src/app/models/proveedor';
import { TablasService } from 'src/app/services/tablas.service';

@Component({
  selector: 'app-tabla-proveedores',
  templateUrl: './tabla-proveedores.component.html',
  styleUrls: ['./tabla-proveedores.component.css']
})

export class TablaProveedoresComponent implements AfterViewInit {

  constructor( private TableService: TablasService ) {}

  tipo: boolean = false;

  displayedColumns: string[] = ['ID', 'Nombre', 'Telefono', 'RFC', 'Buttons'];
  dataSource = new MatTableDataSource<proveedores>;
  data: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.obtenerProveedores();
  }

  hide_this( now: boolean ) {

    this.tipo = now;

  }

  obtenerProveedores(){
    this.TableService.getProviders().subscribe({
      error: (error) => {
      },
      complete: () => {},
      next: (response) => {
        this.data = response;
        console.log( this.data);
        this.dataSource = new MatTableDataSource( this.data );
        this.dataSource.paginator = this.paginator;
      },
    });
  }
  

}

