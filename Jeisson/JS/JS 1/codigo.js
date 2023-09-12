
    var boton = document.getElementById('boton');

    boton.addEventListener("click", (e) => {
        var nombre = document.getElementById("nombre").value;
        alert("Hola, " + nombre);
    });