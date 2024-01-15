import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatosComponentComponent } from './Moldeo/lista-candidatos/candidatos-component/candidatos-component.component';
import { EntrevistasComponenteComponent } from './Moldeo/entrevistas-componente/entrevistas-componente.component';
import { PuestosDisponiblesComponenteComponent } from './Moldeo/puestos-disponibles-componente/puestos-disponibles-componente.component';
import { Error404Component } from './Moldeo/error404/error404.component';
import { ListaCandidatosComponent } from './Moldeo/lista-candidatos/lista-candidatos.component';

@NgModule({
  declarations: [
    AppComponent,
    CandidatosComponentComponent,
    EntrevistasComponenteComponent,
    PuestosDisponiblesComponenteComponent,
    Error404Component,
    ListaCandidatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
