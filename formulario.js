function enviarDatos() {
    var usuario = document.getElementById("usuario").value;
    var fecha = document.getElementById("fecha").value;
    var cant = document.getElementById("cant").value;
    var ubi = document.getElementById("ubi").value;
	var metodoPago = document.querySelector('input[name="metodo"]:checked').value;
    
    window.location.href = "confirmacion.html?usuario=" + encodeURIComponent(usuario) + "&fecha=" + encodeURIComponent(fecha) + "&cant=" + encodeURIComponent(cant) + "&ubi=" + encodeURIComponent(ubi) + "&metodo=" + encodeURIComponent (metodoPago);
}
	

