import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { empleado } from 'src/app/models/empleado';
import { TablasService } from 'src/app/services/tablas.service';

declare var window: any;
@Component({
  selector: 'app-tabla-empleados',
  templateUrl: './tabla-empleados.component.html',
  styleUrls: ['./tabla-empleados.component.css']
})
export class TablaEmpleadosComponent implements AfterViewInit {
  formEmpleado!: FormGroup;
  formPuesto!: FormGroup;
  formLicencia!: FormGroup;

  constructor( 
    private formBuilder: FormBuilder, 
    private TableService: TablasService,
    private cliente: HttpClient
    ) {}

  isEmployeePage: boolean = true;

  displayedColumns: string[] = ['ID', 'Nombre', 'Primer_Apellido', 'Telefono', 'Puesto', 'Buttons'];
  displayedColumnsPuestos: string[] = ['ID', 'Nombre', 'Estatus', 'Buttons'];

  empleadosAll: any;
  puestosAll: any;
  dataSource = new MatTableDataSource<empleado>;
  dataSourcePuestos = new MatTableDataSource;
  

  data: any;
  puestos: any;
  formModal: any;
  formModalPuesto: any;

  isEditEmployee: boolean = false;
  isEditPuesto: boolean = false;

  employeeEdit: any;
  puestoEdit: any;

  selectedTipoLicencia: String = "";
  isLicencia: boolean = true;
  tipos_licencia = [{tipo: "Licencia A"}, {tipo: "Licencia B"}, {tipo: "Licencia C"}];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatPaginator) paginatorPuestos!: MatPaginator;

  showSearchInput: boolean = false;
  searchTerm: string = "";

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModalCenter')
    );
    this.formModalPuesto = new window.bootstrap.Modal(
      document.getElementById('exampleModalCenterPuesto')
    );
    
    this.formEmpleado = this.formBuilder.group({
      // id_empleado: [''],
      nombre: ['', Validators.required],
      apellido1: ['', Validators.required],
      apellido2: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      correo: ['', [Validators.required, Validators.email]],
      id_puesto: ['', Validators.required],
      RFC: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
      direccion: [''],
      curp: ['', [Validators.required, Validators.minLength(18), Validators.maxLength(18)]],
      tipo_licencia: [''],
      fecha_expedicion: [''],
      fecha_vencimiento: [''],
      estatus: ['A']
    });

    this.formPuesto = this.formBuilder.group({
      nombre: ['', Validators.required],
      estatus: ['A']
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourcePuestos.paginator = this.paginatorPuestos;

    this.obtenerEmpleado();
    this.obtenerPuestos();
    
  }

  search(): void {

    if(this.isEmployeePage){
      const data = this.empleadosAll.filter((item: any) => (
        item.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
        || item.apellido1.toLowerCase().includes(this.searchTerm.toLowerCase())
        || item.apellido2.toLowerCase().includes(this.searchTerm.toLowerCase())
        || item.telefono.toLowerCase().includes(this.searchTerm.toLowerCase())
        || item.puesto.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
      ));
      this.dataSource = new MatTableDataSource( data );

    }else{
      const data = this.puestosAll.filter((item: any) => (
        item.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
      ));
      this.dataSourcePuestos = new MatTableDataSource( data );
    }

  }

  toggleSearchInput(): void {
    this.showSearchInput = !this.showSearchInput;
    if(!this.showSearchInput){
      this.searchTerm = "";
      this.search();
    }
  }

  obtenerPuestos(){
    this.TableService.getPositions().subscribe({
      error: (error) => {
      },
      complete: () => {},
      next: (response) => {
        this.data = response;
        this.puestosAll = this.data;
        this.dataSourcePuestos = new MatTableDataSource( this.data );
        this.dataSourcePuestos.paginator = this.paginatorPuestos;
        this.puestos = this.data.filter((puesto: any) => puesto.estatus === 'A');
      },
    });
  }

  obtenerEmpleado(){
    this.TableService.getEmployees().subscribe({
      error: (error) => {
      },
      complete: () => {},
      next: (response) => {
        this.data = response;
        this.empleadosAll = this.data;
        this.dataSource = new MatTableDataSource( this.data );
        this.dataSource.paginator = this.paginator;
      },
    });
  }

  openModal(isEdit: boolean) {
    this.isEditEmployee = isEdit;
    if(!this.isEditEmployee){
      this.formEmpleado.reset();
    }
    this.formModal.show();
  }

  openModalPuesto(isEdit: boolean) {
    this.isEditPuesto = isEdit;
    if(!this.isEditPuesto){
      this.formPuesto.reset();
    }
    this.formModalPuesto.show();
  }

  editEmpleado(empleado: any){
    this.employeeEdit = empleado;
    this.formEmpleado.patchValue({
      id_empleado: empleado.id_empleado,
      nombre: empleado.nombre,
      apellido1: empleado.apellido1,
      apellido2: empleado.apellido2,
      telefono: empleado.telefono,
      correo: empleado.correo,
      id_puesto: empleado.puesto.id_puesto,
      RFC: empleado.RFC,
      direccion: empleado.direccion,
      curp: empleado.curp,
      estatus: empleado.estatus
    });

    this.openModal(true);
  }

  editPuesto(puesto: any){
    this.puestoEdit = puesto;
    this.formPuesto.patchValue({
      nombre: puesto.nombre,
      estatus: puesto.estatus
    });

    this.openModalPuesto(true);
  }

  changeStatusPuesto(puesto: any){
    var new_estatus = puesto.estatus == "A" ? "B" : "A";
    const formValue = { estatus: new_estatus };
    this.TableService.updatePosition(puesto.id_puesto, formValue).subscribe(
      (response) => {
        this.obtenerPuestos();
      },
      (error) => {
        alert('Error al modificar el puesto');
      }
    );
  }

  changeStatusEmpleado(empleado: any){
    var new_estatus = empleado.estatus == "A" ? "B" : "A";
    const formValue = { estatus: new_estatus };
    this.TableService.updateEmployee(empleado.id_empleado, formValue).subscribe(
      (response) => {
        this.obtenerEmpleado();
      },
      (error) => {
        alert('Error al modificar el empleado');
      }
    );
  }

  closeModal(){
    this.formModal.hide();
  }

  closeModalPuesto(){
    this.formModalPuesto.hide();
  }

  submitForm(id_empleado: any){
    
    if(this.formEmpleado.valid){

      const formValue = this.formEmpleado.value;
      if(this.isLicencia && (formValue.tipo_licencia == null || formValue.fecha_expedicion == null || formValue.fecha_vencimiento == null)){
        alert("datos invalidos")
        return;
      }

      if(!this.isLicencia){
        formValue.tipo_licencia = null;
        formValue.fecha_expedicion = null;
        formValue.fecha_vencimiento = null;
      }
      // console.log(formValue)
      formValue.id_puesto = parseInt(formValue.id_puesto, 10);
      formValue.estatus = "A";
      if(id_empleado){
        this.TableService.updateEmployee(id_empleado, formValue).subscribe(
          (response) => {
            console.log('Empleado modificado correctamente', response);
            this.obtenerEmpleado();
            alert("empleado modificado")
            this.closeModal();
          },
          (error) => {
            alert('Error al modifcar el empleado');
          }
        );
      }else{
        this.TableService.insertEmployee(formValue).subscribe(
          (response) => {
            console.log('Empleado registrado correctamente', response);
            this.obtenerEmpleado();
            alert("empleado registrado")
            this.closeModal();
          },
          (error) => {
            alert('Error al registrar el empleado');
          }
        );
      }
    }else{
      alert("datos invalidos")
    }

  }

  submitFormPuesto(id_puesto: any){
    
    if(this.formPuesto.valid){
      const formValue = this.formPuesto.value;
      formValue.estatus = "A";
      if(id_puesto){
        console.log(id_puesto)
  
        this.TableService.updatePosition(id_puesto, formValue).subscribe(
          (response) => {
            console.log('Puesto modificado correctamente', response);
            this.obtenerPuestos();
            alert("puesto modificado")
            this.closeModalPuesto();
          },
          (error) => {
            alert('Error al modificar el puesto');
          }
        );
      }else{
        this.TableService.insertPosition(formValue).subscribe(
          (response) => {
            console.log('Puesto registrado correctamente', response);
            this.obtenerPuestos();
            alert("puesto registrado")
            this.closeModalPuesto();
          },
          (error) => {
            alert('Error al registrar el puesto');
          }
        );
      }
    }else{
      alert("datos invalidos")
    }

  }

  changeIsLicencia(change: boolean){
    this.isLicencia = change;
  }
}
