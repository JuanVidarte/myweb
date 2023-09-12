
function cambiarContenido (){
    document.getElementById("mensaje").innerHTML="TEXTO NUEVO"
}
4
function cambiarValor(){
    document.getElementById("nombre").value ="Alvaro Andrade"
}

function depurar(){
    console.log("Texto depurado");
    console.log(document.getElementById("nombre").value);
}

function mostrarSaludo(){
    alert("Hola Usuario")
}

function limpiar(){
    document.getElementById("nombre").value = "";
}


var boton = document.getElementById('boton')


boton.addEventListener("click", (e)=>{
    var nombre = document.getElementById("nombre").value
    alert("Hola, "+ nombre);
});
  