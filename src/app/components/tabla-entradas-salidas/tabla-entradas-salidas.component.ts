import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Vehiculos } from 'src/app/models/vehiculo';
import { TablasService } from 'src/app/services/tablas.service';
import { formatDate } from '@angular/common';

declare var window: any;

@Component({
  selector: 'app-tabla-entradas-salidas',
  templateUrl: './tabla-entradas-salidas.component.html',
  styleUrls: ['./tabla-entradas-salidas.component.css']
})

export class TablaEntradasSalidasComponent {

  formEntrada: FormGroup;
  formSalida: FormGroup;
  displayedColumns: string[] = ['ID', 'Vehiculo', 'Ruta', 'Hora de entrada', 'Hora de salida', 'Buttons'];
  
  dataSource = new MatTableDataSource<Vehiculos>();

  data: any;
  rutas: any;
  id_seleccionada: any;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  post: Date;

  constructor(private formBuilder: FormBuilder, private TableService: TablasService ) { }
  formModal: any;
  formModal2: any;

  ngOnInit(): void {

    this.post = new Date( Date.now() );

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('ModalInputs')
    );

    this.formModal2 = new window.bootstrap.Modal(
      document.getElementById('ModalOutputs')
    );

    this.formEntrada = this.formBuilder.group({
      hora_entrada: [ formatDate(this.post.toISOString().substring(0, 16), 'yyyy-MM-ddTHH:mm:ss', 'en') ],
      litros_consumidos: ['', [Validators.required, Validators.pattern( "^[0-9]*$" )] ],
      importe: ['', Validators.required],
      kilometraje: ['', Validators.required]
    });

    this.formSalida = this.formBuilder.group({
      hora_salida: [formatDate(this.post.toISOString().substring(0, 16), 'yyyy-MM-ddTHH:mm:ss', 'en') ],
      id_ruta: ['', Validators.required],
    });
  }

  ngAfterViewInit() {
    this.obtenerEntradas_Salidas();
    this.obtenerRutas();
  }

  obtenerEntradas_Salidas(){
    this.TableService.getInt_Out().subscribe({
      error: (error) => {
      },
      complete: () => {},
      next: (response) => {
        this.data = response;
        this.dataSource = new MatTableDataSource( this.data );
        this.dataSource.paginator = this.paginator;
      },
    });
  }

  obtenerRutas() {
    this.TableService.getRoute().subscribe({
      error: (error) => {
      },
      complete: () => {},
      next: (response) => {
        this.rutas = response;
      },
    });
  }

  openInputs( id: number ) {
    this.id_seleccionada = id;
    this.formModal.show();
  }

  closeInputs() {
    this.formModal.hide();
  }

  openOutputs( id: number ) {
    this.id_seleccionada = id;
    this.formModal2.show();
  }

  closeOutputs() {
    this.formModal2.hide();
  }

  updateOutput() {

    if( this.formSalida.valid ) {

      const formValue = this.formSalida.value;   
      formValue.estatus = 'R';
      console.log( formValue );

      this.TableService.updateInputOutput(this.id_seleccionada, formValue).subscribe(
        (response) => {
          console.log('Empleado registrado correctamente', response);
          this.closeOutputs();
        },
        (error) => {
        }
      );

    }

  }

  updateInputs() {

    if( this.formEntrada.valid ) {

      const formValue = this.formEntrada.value;   
      formValue.estatus = 'D';
      console.log( formValue );
  
      this.TableService.updateInputOutput(this.id_seleccionada, formValue).subscribe(
        (response) => {
          console.log('Empleado registrado correctamente', response);
          this.closeOutputs();
        },
        (error) => {
        }
      );
  
    }

  }

}
