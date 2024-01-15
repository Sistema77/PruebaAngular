import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatosComponentComponent } from './Moldeo/lista-candidatos/candidatos-component/candidatos-component.component';
import { EntrevistasComponenteComponent } from './Moldeo/entrevistas-componente/entrevistas-componente.component';
import { PuestosDisponiblesComponenteComponent } from './Moldeo/puestos-disponibles-componente/puestos-disponibles-componente.component';
import { Error404Component } from './Moldeo/error404/error404.component';

const routes: Routes = [
  {path:"", component:CandidatosComponentComponent},
  {path:"candidatos", component:CandidatosComponentComponent},
  {path:"entrevistas", component:EntrevistasComponenteComponent},
  {path:"puestos", component:PuestosDisponiblesComponenteComponent},
  {path:"**", component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
