import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EquipoModel } from '../../models/equipo.model';
import { EquipoService } from '../../services/equipo.service';
import { PartidoService } from '../../services/partidos.service';


@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equipo1: EquipoModel = new EquipoModel();
  equipo2: EquipoModel = new EquipoModel();
  equipo3: EquipoModel = new EquipoModel();
  equipo4: EquipoModel = new EquipoModel();

  constructor(private equipoService: EquipoService, private partidoService: PartidoService) { }

  ngOnInit(): void {
  }

  guardarEquipos(forma: NgForm) {
    console.log("GUARDAR EQUIPO");
    this.equipo1.nombre = forma.value.equipo1;
    this.equipo2.nombre = forma.value.equipo2;
    this.equipo3.nombre = forma.value.equipo3;
    this.equipo4.nombre = forma.value.equipo4;

    this.equipoService.crearEquipo(this.equipo1).subscribe(resp => {
      console.log(resp);
    })
    this.equipoService.crearEquipo(this.equipo2).subscribe(resp => {
      console.log(resp);
    })
    this.equipoService.crearEquipo(this.equipo3).subscribe(resp => {
      console.log(resp);
    })
    this.equipoService.crearEquipo(this.equipo4).subscribe(resp => {
      console.log(resp);
    })
  }

  generarPartidos() {
    console.log("ENTRO");
    this.partidoService.GenerarPartidos().subscribe(resp => {
      console.log(resp);
    })
  }

}
