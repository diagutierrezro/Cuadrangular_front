import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EquipoModel } from '../models/equipo.model';
import { PartidoModel } from '../models/partido.model';
import { timeout, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PartidoService {
  private url = 'http://localhost:6673/v1'


  constructor( private http: HttpClient) { }

  GenerarPartidos(){
    return this.http.get(`${this.url}/GenerarPartidos.json`);
  }

  CargarPartidos(){
    return this.http.get(`${this.url}/partido/?limit=-1`);
     }

  ActualizarPartido(id: number, partido: PartidoModel){
    return this.http.put(`${this.url}/partido/${id}`, partido)
  }
}
