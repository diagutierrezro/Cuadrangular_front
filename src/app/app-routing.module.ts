import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { PartidosComponent } from './pages/partidos/partidos.component';
import { TablaComponent } from './pages/tabla/tabla.component';


const routes: Routes = [
  { path: 'equipos', component: EquiposComponent},
  { path: 'partidos', component: PartidosComponent},
  { path: 'tabla', component: TablaComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'tabla'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
