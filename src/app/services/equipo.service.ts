import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EquipoModel } from '../models/equipo.model';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  private url = 'http://172.17.0.1:6673/v1'

  constructor( private http: HttpClient) { }

  crearEquipo( equipo: EquipoModel){
    console.log(equipo.nombre);
    return this.http.post(`${this.url}/equipo.json`, equipo);
  }

  consultarEquipo(id : number){
    return this.http.get(`${this.url}/equipo/${id}`);
  }
  consultarEquipos(){
    return this.http.get(`${this.url}/equipo`);
  }

}
