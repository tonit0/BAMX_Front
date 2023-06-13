import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vehiculos } from 'src/app/models/vehiculo';
import { TablasService } from 'src/app/services/tablas.service';
import { MatSort } from '@angular/material/sort';

declare var window: any;
@Component({
  selector: 'app-tabla-vehiculos',
  templateUrl: './tabla-vehiculos.component.html',
  styleUrls: ['./tabla-vehiculos.component.css'],
})
export class TablaVehiculosComponent {
  formVehiculo!: FormGroup;
  displayedColumns: string[] = ['ID', 'Marca', 'Modelo', 'Color', 'Placas', 'Buttons'];
  dataSource = new MatTableDataSource<Vehiculos>();
  data: any;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private formBuilder: FormBuilder, private TableService: TablasService ) { }
  formModal: any;
  formModal2: any;
  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModalCenter')
    );

    this.formModal2 = new window.bootstrap.Modal(
      document.getElementById('exampleModalCenter2')
    );

    this.formVehiculo = this.formBuilder.group({
      idVehiculo: [''],
      nombreVehiculo: ['', Validators.required],
      idMarca: [''],
      modelo: [''],
      numeroSerieChasis: [''],
      numeroMotor: [''],
      color: [''],
      tipoCombustible: [''],
      capacidadTanque: [''],
      rendimientoCombustible: [''],
      placas: [''],
      urlFoto: [''],
      estatus: [''],
    });
  }

  ngAfterViewInit() {
    this.obtenerVehiculos();
  }

  obtenerVehiculos(){
    this.TableService.getVehicles().subscribe({
      error: (error) => {
      },
      complete: () => {},
      next: (response) => {
        this.data = response;
        console.log( this.data );
        this.dataSource = new MatTableDataSource( this.data );
        this.dataSource.paginator = this.paginator;
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
