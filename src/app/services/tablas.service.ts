import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { vehiculosModel } from '../models/vehiculosModel';
import { Revicion } from '../models/revision';
import { proveedores } from '../models/proveedor';
import { mantenimiento } from '../models/mantenimiento';
import { falla } from '../models/fallas';
import { empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class TablasService {

  urlApi: string = 'http://localhost:2023/';
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

  getRevisions():Observable <Revicion>{
    return this.cliente
        .get<Revicion>(this.urlApi + 'revisions')
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

  getMaintenances():Observable <mantenimiento>{
    return this.cliente
        .get<mantenimiento>(this.urlApi + 'maintenances')
        .pipe(
          tap(() => {
            this.refresh.next();
          })
        );
  }

  getFailures():Observable <falla>{
    return this.cliente
        .get<falla>(this.urlApi + 'veh_failures')
        .pipe(
          tap(() => {
            this.refresh.next();
          })
        );
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

}
