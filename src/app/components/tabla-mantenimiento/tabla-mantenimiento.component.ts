import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var window: any;
export interface PeriodicElement {
  ID: number;
  Tipo: string;
  Proveedor: string;
  Fecha: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { ID: 1, Tipo: 'Algo', Proveedor: 'Algo 2.0', Fecha: '19-12-2021' },
  { ID: 1, Tipo: 'Algo', Proveedor: 'Algo 2.0', Fecha: '19-12-2021' },
  { ID: 1, Tipo: 'Algo', Proveedor: 'Algo 2.0', Fecha: '19-12-2021' },
  { ID: 1, Tipo: 'Algo', Proveedor: 'Algo 2.0', Fecha: '19-12-2021' },
  { ID: 1, Tipo: 'Algo', Proveedor: 'Algo 2.0', Fecha: '19-12-2021' },
  { ID: 1, Tipo: 'Algo', Proveedor: 'Algo 2.0', Fecha: '19-12-2021' },
  { ID: 1, Tipo: 'Algo', Proveedor: 'Algo 2.0', Fecha: '19-12-2021' },
  { ID: 1, Tipo: 'Algo', Proveedor: 'Algo 2.0', Fecha: '19-12-2021' },
  { ID: 1, Tipo: 'Algo', Proveedor: 'Algo 2.0', Fecha: '19-12-2021' },
  { ID: 1, Tipo: 'Algo', Proveedor: 'Algo 2.0', Fecha: '19-12-2021' },
];
import { mantenimiento } from 'src/app/models/mantenimiento';
import { TablasService } from 'src/app/services/tablas.service';

@Component({
  selector: 'app-tabla-mantenimiento',
  templateUrl: './tabla-mantenimiento.component.html',
  styleUrls: ['./tabla-mantenimiento.component.css'],
})
export class TablaMantenimientoComponent implements AfterViewInit {
  formMantenimiento!: any;

  constructor(
    private formBuilder: FormBuilder,
    private TableService: TablasService
  ) {}
  formModal: any;
  formModal2: any;

  ngOnInit(): void {
    this.formMantenimiento = this.formBuilder.group({
      idMantenimiento: [''],
      idVehiculo: [''],
      tipoMantenimiento: [''],
      fechaProgramada: [''],
      actRealizada: [''],
      idProveedor: [''],
      equipoUsado: [''],
      observaciones: [''],
      total: [''],
      estatus: [''],
    });

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModalCenter')
    );

    this.formModal2 = new window.bootstrap.Modal(
      document.getElementById('exampleModalCenter2')
    );
  }
  
  displayedColumns: string[] = ['ID', 'Tipo', 'Proveedor', 'Fecha', 'Buttons'];
  dataSource = new MatTableDataSource<mantenimiento>();
  data: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.obtenerMantenimiento();
  }

  obtenerMantenimiento() {
    this.TableService.getMaintenances().subscribe({
      error: (error) => {},
      complete: () => {},
      next: (response) => {
        this.data = response;
        console.log(this.data);
        this.dataSource = this.data;
      },
    });
  }

  openModal() {
    this.formModal.show();
  }

  closeModal() {
    this.formModal.hide();
  }

  openModal2() {
    this.formModal2.show();
  }

  closeModal2() {
    this.formModal2.hide();
  }

  submitForm() {}

  submitForm2() {}
}
