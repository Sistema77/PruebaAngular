import { Component } from '@angular/core';

interface Asignatu {
  asig: string;
  sigl: string;
  prof: string;
}

interface Asignatura {
  asignatura: Asignatu[];
}

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.css']
})
export class AsignaturaComponent implements Asignatura {
  asignatura: Asignatu[] = [
    {sigl: "DAW", prof: "Paco", asig : "Desarrollo Aplicaciones Web"}, 
    {sigl: "DWI", prof: "Javier", asig : "Desarrollo Web Inalambrica"},
    {sigl: "DWW", prof: "Sara", asig : "Desarrollo Web Web"}
  ];
  
  selectAsignatura?: Asignatu;
  onSelect(asig: Asignatu): void {
  this.selectAsignatura = asig;
}
}
