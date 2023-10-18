import { Component } from '@angular/core';

interface PreguntaRespuesta {
  preg: string;
  resp: string;
}
interface PregunRespues {
  pregunta: PreguntaRespuesta[];
}

@Component({
  selector: 'app-pregunta-respuesta',
  templateUrl: './pregunta-respuesta.component.html',
  styleUrls: ['./pregunta-respuesta.component.css']
})
export class PreguntaRespuestaComponent implements PregunRespues {
  pregunta: PreguntaRespuesta[] = [
    {preg: "¿Como se define TypeScript?", resp: "SI" },
    {preg: "¿Cuál es la principal diferencia de TypeScript respecto de JavaScript", resp: "El Java"},
    {preg: "Muestra la lista de tipos básicas de TypeScript", resp: "las lista son los padres"},
    {preg: "Con que tres elementos podemos crear uin tipo personalizado en TypeScript", resp: "con tres"},
    {preg: "¿Puedo ejecutar TypeScript en un navegador? Explica tu respuesta", resp: "Si puede, que nadie te diga nunca que no puedes hacer algo"},
    {preg: "Entonces, ¿cómo es que puedo ver con las herramientas del desarrollador del navegador los archivos ts?", resp: "No se ve con el navegador se ve con los ojos"},
    {preg: "¿Para qué sirve el archivo tsconfig.json?", resp: "Para configurar cosas"}
  ];
}
