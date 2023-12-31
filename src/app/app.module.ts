import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PreguntaRespuestaComponent } from './pregunta-respuesta/pregunta-respuesta.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AsignaturaComponent,
    CabeceraComponent,
    PreguntaRespuestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
