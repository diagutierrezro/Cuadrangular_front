import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { PartidosComponent } from './pages/partidos/partidos.component';
import { TablaComponent } from './pages/tabla/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    EquiposComponent,
    PartidosComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
