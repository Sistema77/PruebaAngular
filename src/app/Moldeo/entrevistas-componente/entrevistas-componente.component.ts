import { Component } from '@angular/core';
import { EntrevistasInterfaz } from '../entrevistas-interfaz';

@Component({
  selector: 'app-entrevistas-componente',
  templateUrl: './entrevistas-componente.component.html',
  styleUrls: ['./entrevistas-componente.component.css']
})
export class EntrevistasComponenteComponent implements EntrevistasInterfaz{
  fechEntrevista: string="";
  candidato: string="";
  puesto: string="";
  realizada: string="";

}
