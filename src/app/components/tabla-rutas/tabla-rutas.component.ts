import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TablasService } from 'src/app/services/tablas.service';
declare var window: any;

@Component({
  selector: 'app-tabla-rutas',
  templateUrl: './tabla-rutas.component.html',
  styleUrls: ['./tabla-rutas.component.css']
})
export class TablaRutasComponent implements AfterViewInit {
  formRuta!: FormGroup;

  constructor( 
    private formBuilder: FormBuilder, 
    private TableService: TablasService ) {}

  tipo: boolean = false;
  formModalRuta: any;
  rutasAll: any;
  displayedColumns: string[] = ['ID', 'Nombre', 'Direccion', 'Buttons'];
  dataSource = new MatTableDataSource;
  data: any;

  isEditRuta: boolean = false;

  rutaEdit: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  showSearchInput: boolean = false;
  searchTerm: string = "";

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.obtenerRutas();
  }

  ngOnInit(): void {
    this.formModalRuta = new window.bootstrap.Modal(
      document.getElementById('exampleModalCenterRuta')
    );

    this.formRuta = this.formBuilder.group({
      nombre: ['', Validators.required],
      direccion: ['', Validators.required],
      estatus: ['A']
    })
  }

  openModalRuta(isEdit: boolean) {
    this.isEditRuta = isEdit;
    if(!this.isEditRuta){
      this.formRuta.reset();
    }
    this.formModalRuta.show();
  }

  editRuta(ruta: any){
    this.rutaEdit = ruta;
    this.formRuta.patchValue({
      nombre: ruta.nombre,
      direccion: ruta.direccion,
      estatus: ruta.estatus
    });

    this.openModalRuta(true);
  }

  changeStatusRuta(ruta: any){
    var new_estatus = ruta.estatus == "A" ? "B" : "A";
    const formValue = { estatus: new_estatus };
    this.TableService.updateTrail(ruta.id_ruta, formValue).subscribe(
      (response) => {
        this.obtenerRutas();
        // alert("puesto modificado")
      },
      (error) => {
        alert('Error al modificar la ruta');
      }
    );
  }

  closeModalRuta(){
    this.formModalRuta.hide();
  }

  search(): void {

    const data = this.rutasAll.filter((item: any) => (
      item.nombre.toLowerCase().includes(this.searchTerm.toLowerCase())
      || item.direccion.toLowerCase().includes(this.searchTerm.toLowerCase())
    ));
    this.dataSource = new MatTableDataSource( data );

  }

  toggleSearchInput(): void {
    this.showSearchInput = !this.showSearchInput;
    if(!this.showSearchInput){
      this.searchTerm = "";
      this.search();
    }
  }

  hide_this( now: boolean ) {

    this.tipo = now;

  }

  obtenerRutas(){
    this.TableService.getTrails().subscribe({
      error: (error) => {
      },
      complete: () => {},
      next: (response) => {
        this.data = response;
        this.rutasAll = this.data;
        this.dataSource = this.data;
      },
    });
  }

  submitFormRuta(id_ruta: any){
    
    if(this.formRuta.valid){
      const formValue = this.formRuta.value;
      formValue.estatus = "A";
      if(id_ruta){
        console.log(id_ruta)
  
        this.TableService.updateTrail(id_ruta, formValue).subscribe(
          (response) => {
            console.log('Ruta modificada correctamente', response);
            this.obtenerRutas();
            alert("ruta modificada")
            this.closeModalRuta();
          },
          (error) => {
            alert('Error al modificar ruta');
          }
        );
      }else{
        this.TableService.insertTrail(formValue).subscribe(
          (response) => {
            console.log('Ruta registrada correctamente', response);
            this.obtenerRutas();
            alert("ruta registrada")
            this.closeModalRuta();
          },
          (error) => {
            alert('Error al registrar la ruta');
          }
        );
      }
    }else{
      alert("datos invalidos")
    }

  }

}
