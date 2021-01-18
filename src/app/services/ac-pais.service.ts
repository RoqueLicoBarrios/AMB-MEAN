import { Agilis } from '@agilis/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GEO } from '../models/geo';
import { PaisesRoutingModule } from '../pages/paises/paises-routing.module';
import { PaisesComponent } from '../pages/paises/paises.component';


//import { LocalConnectionService } from './agilis/connection.service';

const urlCommon = environment.UrlRest;


@Injectable({
  providedIn: 'root'
})
export class ACPaisService {

  constructor(private http: HttpClient) { }

  get(p: GEO.Pais) {


    return this.http
      .post<GEO.Pais[]>(urlCommon + 'Pais', new Agilis.WebClientParams('GetByCustom', p.toString()))
      .pipe( 
        map((xs) => xs.map((x) => Object.assign(new GEO.Pais(), x))),
        
      );
      
    
  }
  set(p: GEO.Pais, op: Agilis.Operacion) {
    return this.http
      .post<GEO.Pais>(urlCommon + 'Pais' , new Agilis.WebClientParams(
        op === Agilis.Operacion.ADD ? 'ADD' : op === Agilis.Operacion.UPDATE ? 'UPDATE' : 'DELETE', p.toString()));
  }
}