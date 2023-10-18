import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta-respuesta',
  templateUrl: './pregunta-respuesta.component.html',
  styleUrls: ['./pregunta-respuesta.component.css']
})
export class PreguntaRespuestaComponent {
  pregunta = [
    "¿Como se define TypeScript?",
    "¿Cuál es la principal diferencia de TypeScript respecto de JavaScript",
    "Muestra la lista de tipos básicas de TypeScript",
    "Con que tres elementos podemos crear uin tipo personalizado en TypeScript",
    "¿Puedo ejecutar TypeScript en un navegador? Explica tu respuesta",
    "Entonces, ¿cómo es que puedo ver con las herramientas del desarrollador del navegador los archivos ts?",
    "¿Para qué sirve el archivo tsconfig.json?"
  ];

  respuesta = [
    "SI",
    "El Java",
    "=> la lista son los padres",
    "con tres",
    "Si puede, que nadie te diga nunca que no puedes hacer algo",
    "No se ve con el navegador se ve con los ojos",
    "Para configurar cosas"
  ];
}
