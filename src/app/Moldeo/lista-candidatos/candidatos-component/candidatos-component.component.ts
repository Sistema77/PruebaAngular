import { Component } from '@angular/core';
import { CandidatosInterfaz } from '../../candidatos-interfaz';

@Component({
  selector: 'app-candidatos-component',
  templateUrl: './candidatos-component.component.html',
  styleUrls: ['./candidatos-component.component.css']
})
export class CandidatosComponentComponent implements CandidatosInterfaz{
  
  nombre: string ="";
  apellidos: string="";
  dni: string="";
  direccion: string="";
  telefono: string="";
  mail: string="";
  fechNacimoento: string="";

}
