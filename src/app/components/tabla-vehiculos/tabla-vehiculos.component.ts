import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vehiculos } from 'src/app/models/vehiculo';
import { TablasService } from 'src/app/services/tablas.service';
import { MatSort } from '@angular/material/sort';
import { Brand } from 'src/app/models/brand';
import { environment } from 'src/environments/environment';

declare var window: any;
@Component({
  selector: 'app-tabla-vehiculos',
  templateUrl: './tabla-vehiculos.component.html',
  styleUrls: ['./tabla-vehiculos.component.css'],
})
export class TablaVehiculosComponent {
  formVehiculo!: FormGroup;
  displayedColumns: string[] = [
    'ID',
    'Marca',
    'Modelo',
    'Color',
    'Placas',
    'Buttons',
  ];
  dataSource = new MatTableDataSource<Vehiculos>();
  data: any;
  selectedId: any;
  img_url: any;
  marcas: Brand[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private formBuilder: FormBuilder,
    private TableService: TablasService
  ) {}

  formModal: any;
  formModal2: any;

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('insertModal')
    );

    this.formModal2 = new window.bootstrap.Modal(
      document.getElementById('updateModal')
    );

    this.initiateForm();
  }

  initiateForm() {
    this.formVehiculo = this.formBuilder.group({
      nombre_vehiculo: ['', Validators.required],
      id_marca: ['', Validators.required],
      modelo: ['', Validators.required],
      numero_serie_chasis: ['', Validators.required],
      numero_motor: ['', Validators.required],
      color: ['', Validators.required],
      tipo_combustible: ['', Validators.required],
      capacidad_tanque: ['', Validators.required],
      rendimiento_combustible: ['', Validators.required],
      placas: ['', Validators.required],
      image: [''],
      estatus: ['A'],
      cambio_de_aceite: ['', Validators.required],
      afinacion: ['', Validators.required],
      frenos: ['', Validators.required],
      arranque_y_alternador: ['', Validators.required],
    });
  }

  ngAfterViewInit() {
    this.obtenerVehiculos();
    this.obtenerMarcas();
  }

  obtenerMarcas() {
    this.TableService.getBrands().subscribe({
      error: (error) => {},
      complete: () => {},
      next: (response) => {
        this.marcas = response;
        // console.log(response);
      },
    });
  }

  obtenerVehiculos() {
    this.TableService.getVehicles().subscribe({
      error: (error) => {},
      complete: () => {},
      next: (response) => {
        this.data = response;
        this.dataSource = new MatTableDataSource(this.data);
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

  openModal2(data: any) {
    this.formModal2.show();
    console.log(data);

    this.formVehiculo = this.formBuilder.group({
      nombre_vehiculo: [data.nombre_vehiculo, Validators.required],
      id_marca: [data.marca.id_marca, Validators.required],
      modelo: [data.modelo, Validators.required],
      numero_serie_chasis: [data.numero_serie_chasis, Validators.required],
      numero_motor: [data.numero_motor, Validators.required],
      color: [data.color, Validators.required],
      tipo_combustible: [data.tipo_combustible, Validators.required],
      capacidad_tanque: [data.capacidad_tanque, Validators.required],
      rendimiento_combustible: [
        data.rendimiento_combustible,
        Validators.required,
      ],
      placas: [data.placas, Validators.required],
      image: [''],
      estatus: [data.estatus],
      cambio_de_aceite: [data.cambio_de_aceite, Validators.required],
      afinacion: [data.afinacion, Validators.required],
      frenos: [data.frenos, Validators.required],
      arranque_y_alternador: [data.arranque_y_alternador, Validators.required],
    });

    this.selectedId = data.id_vehiculo;
    this.img_url = environment.api_url + 'files/vehiculos/' + data.url_foto;
  }

  closeModal2() {
    this.formModal2.hide();
    this.initiateForm();
  }

  convertToFormData(formValue: any) {
    const formData = new FormData();
    for (const [key, value] of Object.entries<any>(formValue)) {
      if (key === 'image') {
        const imagenInput = document.getElementById(
          'uploadFile'
        ) as HTMLInputElement;

        const imageFiles: FileList | null = imagenInput.files;

        Array.from(imageFiles ?? []).forEach((file: File) => {
          formData.append(key, file, file.name);
        });
      } else {
        formData.append(key, value);
      }
    }
    return formData;
  }

  submitInsert() {
    let values = this.formVehiculo.value;

    values = this.convertToFormData(values);

    this.TableService.insertVehicle(values).subscribe(
      (response: any) => {
        console.log('Vehiculo registrado correctamente', response);
        this.obtenerVehiculos();
        alert(response.message);
        this.closeModal();
      },
      (error) => {
        alert('Error al registrar el Vehiculo');
      }
    );
  }

  submitUpdate() {
    let values = this.formVehiculo.value;

    values = this.convertToFormData(values);

    this.TableService.updateVehicle(this.selectedId, values).subscribe(
      (response: any) => {
        console.log('Vehiculo actualizado correctamente', response);
        this.obtenerVehiculos();
        alert(response.message);
        this.closeModal2();
      },
      (error) => {
        alert('Error al actualizar el Vehiculo');
      }
    );
  }
}
