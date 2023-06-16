import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { proveedores } from 'src/app/models/proveedor';
import { TablasService } from 'src/app/services/tablas.service';
declare var window: any;
@Component({
  selector: 'app-tabla-proveedores',
  templateUrl: './tabla-proveedores.component.html',
  styleUrls: ['./tabla-proveedores.component.css']
})

export class TablaProveedoresComponent implements AfterViewInit {

  formModal: any;
  formModal2: any;
  formProveedores: FormGroup;

  constructor( private TableService: TablasService,private formBuilder: FormBuilder ) {
   

  }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('exampleModalCenter')
    );

    // this.formModal2 = new window.bootstrap.Modal(
    //   document.getElementById('exampleModalCenterProvM')
    // );


    this.formProveedores = this.formBuilder.group({
      id_proveedor: [''],
      nombre: [''],
      telefono: [''],
      correo: [''],
      RFC: [''],
      estatus: ['']
    });
  
  }

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

  submitForm() {
    this.formModal.hide();
  }

  submitForm2() {
    this.formModal2.hide();
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

