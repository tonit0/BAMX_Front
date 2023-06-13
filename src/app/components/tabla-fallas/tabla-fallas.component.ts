import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { falla } from 'src/app/models/fallas';
import { TablasService } from 'src/app/services/tablas.service';

@Component({
  selector: 'app-tabla-fallas',
  templateUrl: './tabla-fallas.component.html',
  styleUrls: ['./tabla-fallas.component.css']
})
export class TablaFallasComponent implements AfterViewInit {

  constructor( private TableService: TablasService, private router: ActivatedRoute ) {}

  tipo: boolean = false;

  displayedColumns: string[] = ['ID', 'Vehiculo', 'Preferencia', 'Fecha', 'Estatus', 'Buttons'];
  dataSource = new MatTableDataSource<falla>;
  data: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.obtenerFallas_Concluidas();
  }

  hide_this( now: boolean ) {

    this.tipo = now;

    if( !now ) {
      this.obtenerFallas_Concluidas();
    }
    else {
      this.obtenerFallas_Pendientes();
    }

  }

  obtenerFallas_Concluidas(){
    console.log( this.router.snapshot.paramMap.get('id') );
    this.TableService.getFailures_Concluded( this.router.snapshot.paramMap.get('id') ).subscribe({
      error: (error) => {
      },
      complete: () => {},
      next: (response) => {
        this.data = response;
        console.log( this.data ) ;
        this.dataSource = new MatTableDataSource( this.data );
        this.dataSource.paginator = this.paginator;

      },
    });
  }

  obtenerFallas_Pendientes(){
    console.log( this.router.snapshot.paramMap.get('id') );
    this.TableService.getFailures_Unfinished( this.router.snapshot.paramMap.get('id') ).subscribe({
      error: (error) => {
      },
      complete: () => {},
      next: (response) => {
        this.data = response;
        console.log( this.data ) ;
        this.dataSource = new MatTableDataSource( this.data );
        this.dataSource.paginator = this.paginator;

      },
    });
  }


}
