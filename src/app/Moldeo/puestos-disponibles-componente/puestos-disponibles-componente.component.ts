import { Component } from '@angular/core';
import { PuestosDispobiblesInterfaz } from '../puestos-dispobibles-interfaz';

@Component({
  selector: 'app-puestos-disponibles-componente',
  templateUrl: './puestos-disponibles-componente.component.html',
  styleUrls: ['./puestos-disponibles-componente.component.css']
})
export class PuestosDisponiblesComponenteComponent implements PuestosDispobiblesInterfaz{
  puesto: string="";
  disponible: boolean=true;
  empresa: string="";

  constructor(){}

  
}
