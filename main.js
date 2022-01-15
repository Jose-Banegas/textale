import * as Room from './modules/rooms.js';
import * as Interfaz from './modules/interfaz.js';

Interfaz.imprimir("Bienvenido a Claudio's Quest. Esta aventura conversacional tiene el objetivo de ser la base para la creación del motor TextTale.<br> Para desplazarte por el mundo utiliza los comandos <b>N</b>, <b>S</b>, <b>E</b>, <b>O</b> (no se distinguen mayúsculas y minúsculas, todo vale) que refieren a los puntos cardinales.")

Interfaz.entrada(Room.r0_start) //Inicio

