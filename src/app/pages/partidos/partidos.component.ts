import { Component, OnInit } from '@angular/core';
import { PartidoService } from '../../services/partidos.service';
import { PartidoModel } from '../../models/partido.model';
import { NgForm } from '@angular/forms';
import { EquipoModel } from 'src/app/models/equipo.model';
import { EquipoService } from 'src/app/services/equipo.service';
import { PartidoAuxModel } from '../../models/partidoAux.model';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css']
})
export class PartidosComponent implements OnInit {

  partidos : PartidoModel[] = []
  partidosAux : PartidoAuxModel[] = []
  partido : PartidoModel[]
  resp : PartidoModel
  nombres : string[]
  equipo: EquipoModel []

  constructor(private equipoService: EquipoService, private partidoService: PartidoService) { }

  ngOnInit(): void {
    this.partidoService.CargarPartidos().subscribe(resp => {
      console.log(resp);
      for (let index = 0; index < 12; index++) {
        this.partidos[index] = resp[index];  
        this.partidosAux[index] = resp[index]; 
        this.equipoService.consultarEquipo(this.partidos[index].IdEquipoLocal).subscribe((equi:any) => {
          this.partidos[index].EquipoLocal = equi.Nombre;
        })  
        this.equipoService.consultarEquipo(this.partidos[index].IdEquipoVisitante).subscribe((equi:any) => {
          this.partidos[index].EquipoVisitante = equi.Nombre;
        })    
      }
      console.log(this.partidos);
    })
  }

  verPartidos(forma: NgForm){
    for (let index = 0; index < 12; index++) {
      console.log(this.partidos[index].Id);
      this.partidosAux[index].Id = this.partidos[index].Id;
      this.partidosAux[index].IdEquipoLocal = this.partidos[index].IdEquipoLocal;
      this.partidosAux[index].IdEquipoVisitante = this.partidos[index].IdEquipoVisitante; 
    }
    this.partidosAux[0].GolesLocal = forma.value.Local0;
    this.partidosAux[1].GolesLocal = forma.value.Local1;
    this.partidosAux[2].GolesLocal = forma.value.Local2;
    this.partidosAux[3].GolesLocal = forma.value.Local3;
    this.partidosAux[4].GolesLocal = forma.value.Local4;
    this.partidosAux[5].GolesLocal = forma.value.Local5;
    this.partidosAux[6].GolesLocal = forma.value.Local6;
    this.partidosAux[7].GolesLocal = forma.value.Local7;
    this.partidosAux[8].GolesLocal = forma.value.Local8;
    this.partidosAux[9].GolesLocal = forma.value.Local9;
    this.partidosAux[10].GolesLocal = forma.value.Local10;
    this.partidosAux[11].GolesLocal = forma.value.Local11;
    this.partidosAux[0].GolesVisitante = forma.value.Visitante0;
    this.partidosAux[1].GolesVisitante = forma.value.Visitante1;
    this.partidosAux[2].GolesVisitante = forma.value.Visitante2;
    this.partidosAux[3].GolesVisitante = forma.value.Visitante3;
    this.partidosAux[4].GolesVisitante = forma.value.Visitante4;
    this.partidosAux[5].GolesVisitante = forma.value.Visitante5;
    this.partidosAux[6].GolesVisitante = forma.value.Visitante6;
    this.partidosAux[7].GolesVisitante = forma.value.Visitante7;
    this.partidosAux[8].GolesVisitante = forma.value.Visitante8;
    this.partidosAux[9].GolesVisitante = forma.value.Visitante9;
    this.partidosAux[10].GolesVisitante = forma.value.Visitante10;
    this.partidosAux[11].GolesVisitante = forma.value.Visitante11;  
    console.log(this.partidosAux);
  }

  

}
