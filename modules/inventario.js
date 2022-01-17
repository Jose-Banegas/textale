// Inventario

const cajaInventario = document.getElementById("inventoryItems");


window.inventario = ["Carta del hechicero Mox", "Cantimplora"];

const actualizarInventario = () => {
	cajaInventario.innerHTML = "";
		window.inventario.map( item => {
		const itemInv = document.createElement("li")
		itemInv.innerHTML = item;
		cajaInventario.appendChild(itemInv);
	} )
}


export const agregarItem = (item) => {
	window.inventario.push(item)
	actualizarInventario()
}


actualizarInventario()


