import {Room} from './roomClass.js';
import { desaparecerHotspot } from './fn.js';

import {agregarItem} from './inventario.js'
export const r0_start = new Room("Campos abiertos", "Te encuentras en la entrada del bosque encantado de Finn. En sus profundidades se encuentra el poderosísimo hechicero Mox, quien, al parecer, desea verte. La entrada está al Norte y, junto a ella, hay un cartel.");
r0_start.boolN = true;
r0_start.boolS = false;
r0_start.boolE = false;
r0_start.boolO = false;
r0_start.hotspots = [{nombre: "sol", fnMirar() {}, mirar: "es el sol"}, {nombre: "cartel", fnMirar(){}, mirar: "El pequeño cartel reza:<br/>'Entrada al Bosque de Finn. Por favor, si no estás dispuesto/dispuesta a correr una muerte espantosamente desagradable y dolorosa, no entres. Muchas gracias'"}]


export const r1_entrada = new Room("Entrada del bosque", "El bosque de Finn es un lugar muy bello. Atrás tuyo quedó la entrada del bosque, y adelante puedes vislumbrar un claro.")
r1_entrada.boolN = true;
r1_entrada.boolS = true;
r1_entrada.boolE = false;
r1_entrada.boolO = false;
r1_entrada.hotspots = [{nombre: "rama", fnMirar() {}, mirar: "Es una rama, a lo mejor es útil.", fnAgarrar() {agregarItem("rama")}, agarrar: "Recoges la rama."}]

export const r2_claro = new Room("Claro", "Has llegado a un pequeño claro, en el que los caminos se abren. Hacia el Norte se encuentra el camino hacia las Montañas Nevadas, y hacia el Este y el Oeste se abren dos caminos que te resultan desconocidos.");
r2_claro.boolN = true;
r2_claro.boolS = true;
r2_claro.boolE = true;
r2_claro.boolO = true;

export const r3_sendero = new Room("Sendero Montañoso", " El sendero montañoso es un terreno hosco, que sube y sube hasta la cima de las Montañas Nevadas. Aun así, no puedes seguir caminando hacia el norte porque en el medio del paso se encuentra un enorme troll a cuyos pies yace el cadaver completamente descuartizado del hechicero Mox. <br><br> <i>Troll:</i> Alejate si no quieres terminar como él.")
r3_sendero.boolN = false;
r3_sendero.boolS = true;
r3_sendero.boolE = false;
r3_sendero.boolO = false;
r3_sendero.hotspots = [{nombre: "troll", fnMirar(){}, mirar: "El troll mide el doble de tu tamaño, es calvo y de color verde.", hablar: "- Usted: ¡¿Qué ha hecho?!<br/>- Troll: Maté a este viejo charlatán."}]

export const r4_cascada = new Room("Cascada Mortal", "Estas viendo por primera vez a la Cascada Mortal, famosa en tu pueblo por ser el lugar donde el majestuoso guerrero Orxolot fue asesinado por hermano Pipilix.")
r4_cascada.boolN = false;
r4_cascada.boolS = false;
r4_cascada.boolE = false;
r4_cascada.boolO = true;
r4_cascada.hotspots = [{nombre: "cascada", atacar: "Claro, golpear el agua", fnMirar(){}, mirar: "Es una cascada muy bonita, pero peligrosa. Mejor nos alejamos de ella."}, {}]

export const r5_exteriorCabaña = new Room("Exterior de Cabaña", "Delante tuyo se encuentra una antigua cabaña, en cuya escalinata se encuentra sentado un anciano con cara triste. Sobre la pared de la vivienda se encuentra una caña de pescar")
r5_exteriorCabaña.boolN = false;
r5_exteriorCabaña.boolS = false;
r5_exteriorCabaña.boolE = true;
r5_exteriorCabaña.boolO = false;

r5_exteriorCabaña.hotspots = [
	{nombre: "caña", agarrar: "Recoges la caña de pescar", fnAgarrar(){
		agregarItem("Caña de pescar");
		
	}, fnMirar() {},
		 mirar: "Es una caña de pescar"},
	{nombre: "anciano", atacar: "Golpeas al anciano.<br/>-Anciano: ¡Aaaaaaaaajjjjjh! ¡Pensé que este día no podía ponerse peor!", fnMirar() {}, mirar: "Es hombrecillo viejo. Se lo ve muy triste.", hablar: "- Usted: ¿Por qué la cara larga, viejo?<br>- Anciano: Hoy unos jóvenes me golpearon y me lanzaron a la cascada y perdí mis llaves. El cerrajero Mario se fue de vacaciones al Sur hasta el mes entrante, así que quedé afuera de mi casa."}, {}
]











//Destinos
r0_start.cambioN = r1_entrada;

r1_entrada.cambioS = r0_start;	
r1_entrada.cambioN = r2_claro;

r2_claro.cambioS = r1_entrada;
r2_claro.cambioN = r3_sendero;
r2_claro.cambioE = r4_cascada;
r2_claro.cambioO = r5_exteriorCabaña;

r3_sendero.cambioS = r2_claro;

r4_cascada.cambioO = r2_claro;

r5_exteriorCabaña.cambioE = r2_claro; 
