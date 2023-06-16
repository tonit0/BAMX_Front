import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { vehiculosModel } from '../models/vehiculosModel';
import { Revision } from '../models/revision';
import { proveedores } from '../models/proveedor';
import { mantenimiento } from '../models/mantenimiento';
import { falla } from '../models/fallas';
import { empleado } from '../models/empleado';
import { entradas_salida } from '../models/entrada-salida';
import { ruta } from '../models/rutas';
import { Brand } from '../models/brand';
import { Vehiculos } from '../models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class TablasService {

  urlApi: string = 'http://localhost:2024/';
  private _refresh$ = new Subject<void>();
  get refresh() {
    return this._refresh$;
  }

  constructor( private cliente: HttpClient ) { }

  getVehicles():Observable <vehiculosModel>{
    return this.cliente
        .get<vehiculosModel>(this.urlApi + 'vehicles')
        .pipe(
          tap(() => {
            this.refresh.next();
          })
        );
  }

  insertVehicle(form: any) {
    return this.cliente
    .post<Vehiculos>(this.urlApi + 'vehicles', form);
  }

  updateVehicle(id: any, form: any) {
    return this.cliente
    .put<Vehiculos>(this.urlApi + 'vehicles/' + id, form);
  }

  getRevisions( id_veh: any ):Observable <Revision>{
    return this.cliente
        .get<Revision>(this.urlApi + 'revisions/'+ id_veh)
        .pipe(
          tap(() => {
            this.refresh.next();
          })
        );
  }

  getProviders():Observable <proveedores>{
    return this.cliente
        .get<proveedores>(this.urlApi + 'providers')
        .pipe(
          tap(() => {
            this.refresh.next();
          })
        );
  }

  getMaintenances( id_veh: any ):Observable <mantenimiento>{
    return this.cliente
        .get<mantenimiento>(this.urlApi + 'maintenances/' + id_veh)
        .pipe(
          tap(() => {
            this.refresh.next();
          })
        );
  }

  getFailures_Concluded(  id_veh: any ):Observable <falla>{
    return this.cliente
        .get<falla>(this.urlApi + 'veh_failures/Concluded/' + id_veh )
        .pipe(
          tap(() => {
            this.refresh.next();
          })
        );
  }

  getFailures_Unfinished(  id_veh: any ):Observable <falla>{
    return this.cliente
        .get<falla>(this.urlApi + 'veh_failures/Unfinished/' + id_veh )
        .pipe(
          tap(() => {
            this.refresh.next();
          })
        );
  }

  getTrails():Observable <falla>{
    return this.cliente
        .get<falla>(this.urlApi + 'trails')
        .pipe(
          tap(() => {
            this.refresh.next();
          })
        );
  }

  getBrands():Observable <Brand[]>{
    return this.cliente
        .get<Brand[]>(this.urlApi + 'brands')
        .pipe(
          tap(() => {
            this.refresh.next();
          })
        );
  }

  insertTrail(form: any) {
    return this.cliente
    .post(this.urlApi + 'trails', form);
  }

  updateTrail(id: any, form: any) {
    return this.cliente
    .put(this.urlApi + 'trails/' + id, form);
  }

  getEmployees():Observable <empleado>{
    return this.cliente
        .get<empleado>(this.urlApi + 'employees')
        .pipe(
          tap(() => {
            this.refresh.next();
          })
        );
  }

  insertEmployee(form: any) {
    return this.cliente
    .post<empleado>(this.urlApi + 'employees', form);
  }

  updateEmployee(id: any, form: any) {
    return this.cliente
    .put<empleado>(this.urlApi + 'employees/' + id, form);
  }

  getPositions():Observable <empleado>{
    return this.cliente
        .get<empleado>(this.urlApi + 'positions')
        .pipe(
          tap(() => {
            this.refresh.next();
          })
        );
  }

  insertPosition(form: any) {
    return this.cliente
    .post(this.urlApi + 'positions', form);
  }

  updatePosition(id: any, form: any) {
    return this.cliente
    .put(this.urlApi + 'positions/' + id, form);
  }

  getInt_Out():Observable <entradas_salida> {
    return this.cliente
    .get<entradas_salida>(this.urlApi + 'inputs_outputs')
    .pipe(
      tap(() => {
        this.refresh.next();
      })
    );
  }

  updateInputOutput(id: any, form: any) {
    return this.cliente
    .put(this.urlApi + 'inputs_outputs/' + id, form);
  }

  getRoute():Observable <ruta> {
    return this.cliente
    .get<ruta>(this.urlApi + 'trails/')
    .pipe(
      tap(() => {
        this.refresh.next();
      })
    );
  }
}
