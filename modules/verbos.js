//agarrar

export const agarrar = ["agarrar", "recoger", "coger", "levantar", "agarra", "recoge", "coge"];
export const agarrarCheck = (verbo) => {
	let check = false;
	agarrar.find( palabra => {
		if (palabra == verbo) {
			check = true;
		}
	} )
	return check;
}


//mirar

export const mirar = ["mirar", "mira", "observar", "observa", "examinar", "examina", "ver", "ex"];
export const mirarCheck = (verbo) => {
	let check = false;
	mirar.find( palabra => {
		if (palabra == verbo) {
			check = true;
		}
	} )
	return check;
}


//hablar

export const hablar = ["hablar", "saludar", "habla", "saluda", "conversar", "conversa"];
export const hablarCheck = (verbo) => {
	let check = false;
	hablar.find( palabra => {
		if (palabra == verbo) {
			check = true;
		}
	} )
	return check;
}


//atacar

export const atacar = ["atacar", "ataca", "patea", "golpea", "patear", "golpear", "asesinar", "asesina"];
export const atacarCheck = (verbo) => {
	let check = false;
	atacar.find( palabra => {
		if (palabra == verbo) {
			check = true;
		}
	} )
	return check;
}





export const verboCheckGlobal = (verbo) => {
	if (hablarCheck(verbo) || agarrarCheck(verbo) == true || mirarCheck(verbo) == true || atacarCheck(verbo)) {
		return true;
	} else {
		return false;
	}
}

//buscar

// if (cadena[0] == "buscar" && lugar.items[0]) {
// 	imprimir("Investigando el lugar puedes ver " + " " + lugar.items);
// } else {
// 	if (cadena[0] == "buscar" && lugar.items[0] == "") {
// 		imprimir("Aqui no hay nada")
// 	}
// }

// if (cadena[0] == "recoger" && cadena[1] == lugar.items[0]) {
// 	imprimir("Has recogido la espada")
// 	lugar.items[0] = "";
// } else if (cadena[0] == "recoger" && cadena[1] == lugar.items[1]) {
// 		imprimir("Has recogido el culo")
// 		lugar.items[1] = "";
// 	}
// else if (cadena[0] == "recoger" && cadena[1] == lugar.items[2]) {
// 		imprimir("Has recogido el pito")
// 		lugar.items[2] = "";
// 	}
