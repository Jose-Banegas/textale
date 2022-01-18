import {hotspotChecker} from './hotspots.js'
import {verboCheckGlobal, hablarCheck, agarrarCheck, mirarCheck, atacarCheck} from './verbos.js'
import { desaparecerHotspot } from './fn.js';

const hoja = document.getElementById("hoja");

const relato = document.createElement("p");
relato.style.marginBottom = "0"

let relatoText = "Bienvenido a Zork"
const parser = document.createElement("form");
const parserSymbol = document.createElement("p")
const parserInput = document.createElement("input")
parserSymbol.style.margin = "0";
parser.style.display = "flex";
parser.style.backgroundColor = "#000000"
parser.style.alignItems = "center";
parserSymbol.innerHTML = ">";
parserInput.type = "text";
parserInput.style.backgroundColor = "#000000"
parser.style.color = "#ffffff"
parserInput.style.color = "#ffffff"
parserInput.style.width = "100%"
parserInput.style.margin = "0"
parserInput.style.border = "none";
parser.appendChild(parserSymbol);
parser.appendChild(parserInput)
hoja.appendChild(relato);
hoja.appendChild(parser);

let contenidoParser;




// Imprimir
export const imprimir = (mensaje) => {
	relatoText = `${relato.innerHTML}<br>${mensaje}` 
	relato.innerHTML = `${relatoText}`
	
}


parser.focus();
hoja.onsubmit = (e) => {

	parser.focus();
	parser.scrollIntoView();
	
	e.preventDefault()
	contenidoParser = parserInput.value;
	imprimir(">" + contenidoParser)
	parserInput.value = "";
	cerebro(contenidoParser)



}

const cerebro = parse => {
	//direccion
	switch(parse) {
			
		case "N":
			moverse("N");
			return;	
		case "n":
			moverse("N");
			return;	
		case "S":
			moverse("S");
			return;	
		
		case "s":
			moverse("S");
			return;
		case "E":
			moverse("E")
			return;	
		case "e":
			moverse("E")
			return;	
		case "O":
			moverse("O")
			return;	
		
		case "o":
			moverse("O")
			return;
			
	}

	//split string

	//buscar

	let cadena = parse.split(" ");
	
	if(cadena.length == 1 && cadena[0] == "buscar" && window.lugar.hotspots == undefined)  {		
		imprimir("Investigas el lugar pero no encuentras nada que te resulte útil. ");
		
		} else if(cadena.length == 1 && cadena[0] == "buscar" && window.lugar.hotspots.length > 0)  {		
		imprimir("Investigando el lugar puedes ver: ");
		window.lugar.hotspots.map(hot => imprimir(hot.nombre))
	} 
	
		
	

	if(verboCheckGlobal(cadena[0]) == true && hotspotChecker(cadena[1]) == true) {
		
		if(hablarCheck(cadena[0]) == true) {
			if(window.lugar.hotspots[window.contador].hablar == undefined) {
				imprimir(`- Usted: Hola!<br>- ${window.lugar.nombre}: ...`)
			} else {
				imprimir(window.lugar.hotspots[window.contador].hablar)
		}}
		if(mirarCheck(cadena[0]) == true) {
			if(window.lugar.hotspots[window.contador].mirar == undefined) {
				imprimir(`No hay nada que ver.`)
			} else {
				window.lugar.hotspots[window.contador].fnMirar();
				imprimir(window.lugar.hotspots[window.contador].mirar)
		}}

		if(agarrarCheck(cadena[0]) == true) {

			if(window.lugar.hotspots[window.contador].agarrar == undefined) {
				imprimir("No es algo que se pueda agarrar.")
			}
	
			 else {
				window.lugar.hotspots[window.contador].fnAgarrar();
				imprimir(window.lugar.hotspots[window.contador].agarrar)
				desaparecerHotspot();
		}}

		if(atacarCheck(cadena[0]) == true) {
			if(window.lugar.hotspots[window.contador].atacar == undefined) {
			imprimir("Te pones firme y atacas con todas tus fuerzas, pero luego te das cuenta de que no tiene sentido atacar esto.")
			} else {
			imprimir(window.lugar.hotspots[window.contador].atacar)
		}





		} 
	}}
	





/*	if(hotspotChecker(cadena[1]) == true && mirarCheck(cadena[0]) == true) {
			alert(cadena[0] + cadena[1])
	}*/



	



export const moverse = (x) => {
	if (x == "N" && window.lugar.boolN == true) {
		cambiarLugar("N")
		return
	}
	if (x == "S" && window.lugar.boolS == true) {
		cambiarLugar("S")	
		return
	}
	if (x == "E" && window.lugar.boolE == true) {
		cambiarLugar("E")
		return
	}
	if (x == "O" && window.lugar.boolO == true) {
		cambiarLugar("O")
		return
	}

	if (x == "N" && window.lugar.boolN == false) {
		imprimir("No hay ningún tipo de camino hacia el Norte")	
		return
	}
	if (x == "S" && window.lugar.boolS == false) {
		imprimir("No hay ningún tipo de camino hacia el Sur")
		return
	}
	if (x == "E" && window.lugar.boolE == false) {
		imprimir("No hay ningún tipo de camino hacia el Este")	
		return
	}
	if (x == "O" && window.lugar.boolO == false) {
		imprimir("No hay ningún tipo de camino hacia el Oeste ")	
		return
	}	
}


export const cambiarLugar = (x) => {
	if (x == "N") {
		window.lugar = window.lugar.cambioN;
		imprimir(`<br/><u><b>${window.lugar.nombre}</b><u/> `)
		imprimir(`<b>${window.lugar.descripcion}</b>`)

	}
	if (x == "S") {
		lugar = window.lugar.cambioS;
		imprimir(`<br/><u><b>${window.lugar.nombre}</b><u/> `)
		imprimir(`<b>${window.lugar.descripcion}</b>`)	
	}
	if (x == "E") {
		lugar = window.lugar.cambioE;
		imprimir(`<br/><u><b>${window.lugar.nombre}</b><u/> `)
		imprimir(`<b>${window.lugar.descripcion}</b>`)	
	}

	if (x == "O") {
		lugar = window.lugar.cambioO;
		imprimir(`<br/><u><b>${window.lugar.nombre}</b><u/> `)
		imprimir(`<b>${window.lugar.descripcion}</b>`)	

	}
	
}

export const entrada = (nuevoLugar) => {
	window.lugar = nuevoLugar;

	imprimir(`<br/><u><b>${window.lugar.nombre}</b><u/> `)
	imprimir(`<b>${window.lugar.descripcion}</b>`)

}
