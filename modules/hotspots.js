export const hotspotChecker = (sustantivo) => {
	let check = false;
	let contador = 0;
	window.lugar.hotspots.map( hotspot => {
				
		
		if (hotspot.nombre == sustantivo) {
			check = true;
			window.contador = contador;
		}
		contador++;
	} )
	
	return check;
}


