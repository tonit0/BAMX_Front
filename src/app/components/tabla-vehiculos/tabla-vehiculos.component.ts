import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var window:any;
export interface PeriodicElement {
  ID: number;
  Marca: string;
  Modelo: string;
  Color: string;
  Placas: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},
  {ID: 1, Marca: 'Algo', Modelo: 'Algo 2.0', Color: 'Rojo', Placas: 'EGU-18-80'},

];

@Component({
  selector: 'app-tabla-vehiculos',
  templateUrl: './tabla-vehiculos.component.html',
  styleUrls: ['./tabla-vehiculos.component.css'],
})

export class TablaVehiculosComponent {

  formVehiculo!: FormGroup;

  constructor(private formBuilder: FormBuilder){

  }
  formModal:any;
  formModal2:any;
  ngOnInit():void{
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModalCenter')
    )

    this.formModal2 = new window.bootstrap.Modal(
      document.getElementById('exampleModalCenter2')
    )

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
      estatus: ['']
    });
  }
  displayedColumns: string[] = ['ID', 'Marca', 'Modelo', 'Color', 'Placas', 'Buttons'];
  dataSource = ELEMENT_DATA;


  openModal(){
    this.formModal.show();
  }

  closeModal(){
    this.formModal.hide();
  }

  openModal2(){
    this.formModal2.show();
  }

  closeModal2(){
    this.formModal2.hide();
  }


  submitForm(){

  }

  submitForm2(){

  }
}
