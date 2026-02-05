window.onload = function (){
	const params=new URLSearchParams(window.location.search);
	const usuario=params.get("usuario");
	const fecha=params.get("fecha");
	const cant=params.get("cant");
	const ubi=params.get("ubi");
	const metodo = params.get("metodo");
	
	document.getElementById("resultado").innerHTML=
	   `<p><strong>NOMBRE:</strong> ${usuario}</p>
        <p><strong>FECHA DEL CONCIERTO:</strong> ${fecha}</p>
        <p><strong>LUGAR DEL SHOW:</strong> BUENOS AIRES</p>
        <p><strong>CANTIDAD DE ENTRADAS:</strong> ${cant}</p>
		<p><strong>UBICACION:</strong> ${ubi}</p>
        <p><strong>METODO DE PAGO:</strong> ${metodo}</p>`;
}