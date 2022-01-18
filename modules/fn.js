import {imprimir} from './interfaz.js';

const cajaInventario = document.getElementById("inventoryItems");

// alert("hola")

window.inventario = ["Caña de pescar", "Alfajor Jorgito"];

const actualizarInventario = () => {
	window.inventario.map( item => {
		const itemInv = document.createElement("li")
		itemInv.innerHTML = item;
		cajaInventario.appendChild(itemInv);
	} )
}
actualizarInventario()

export const desaparecerHotspot = () => {
	window.lugar.hotspots[window.contador].agarrar = undefined; 
	
}


