
function saludar(){
    var nombre =document.getElementById('nombre').value;
    //alert("Hola," + nombre);
    console.log("Hola," + nombre)

}

function cambiarcontenido(){
    document.getElementById('mensaje').innerHTML = "texto nuevo";
}

function cambiarvalor(){
    document.getElementById('nombre').value = "Pedro";
}

function depurar(){
    console.log("Texto depuradoooo!!!");
    console.log(document.getElementById('nombre').value);
}


function mostrarsaludo(){
    alert("HOLA USUARIO!")
}
   

function limpiar(){
    document.getElementById('nombre').value = "";
}