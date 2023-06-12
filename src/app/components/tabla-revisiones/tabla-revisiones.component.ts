import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Revicion } from 'src/app/models/revision';
import { TablasService } from 'src/app/services/tablas.service';

@Component({
  selector: 'app-tabla-revisiones',
  templateUrl: './tabla-revisiones.component.html',
  styleUrls: ['./tabla-revisiones.component.css']
})
export class TablaRevisionesComponent implements AfterViewInit {

  constructor( private TableService: TablasService ) { }

  displayedColumns: string[] = ['ID', 'Fecha', 'Hora', 'Conductor', 'Destiono', 'Buttons'];
  dataSource = new MatTableDataSource<Revicion>;
  data: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.obtenerRevision();
  }

  obtenerRevision(){
    this.TableService.getRevisions().subscribe({
      error: (error) => {
      },
      complete: () => {},
      next: (response) => {
        this.data = response;
        console.log( this.data);
        this.dataSource = this.data;
      },
    });
  }
}
