function saludar(){
    var Nombre = document.getElementById('Nombre').value;
    //alert("Hola " + Nombre);misma pagina
    console.log("Hola " + Nombre);//consola
}

function cambiarContenido(){
    document.getElementById('mensaje').innerHTML = "Texto nuevo!"
}

function cambiarValor(){
    document.getElementById('Nombre').value = "Pepito Perez"
}

function depurar() {
    console.log("texto depurado!")
    console.log(document.getElementById('Nombre').value)
}

function mostrarSaludo() {
    alert("Hola Usuario!");
}

function limpiar(){
    document.getElementById('Nombre').value = ""
}