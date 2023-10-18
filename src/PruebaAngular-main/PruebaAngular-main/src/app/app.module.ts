import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { PreguntaRespuestaComponent } from './pregunta-respuesta/pregunta-respuesta.component';
import { CabeceraComponent } from './cabecera/cabecera.component';

@NgModule({
  declarations: [
    AppComponent,
    AsignaturaComponent,
    PreguntaRespuestaComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
