function validaredad(){

    var edad = document.getElementById('edad').value;

    if (edad < 1 || edad > 100) {
        alert("incorrecto");
    } else {


    if (edad < 18) {
        alert("Usted es menor de edad pai")

    } else {
        alert("Usted es mayor de edad pa")
    }
    }
}

function validarCorreoElectronico(correo) {
    const expresionRegular = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
    return expresionRegular.test(correo);
  }
  
  
const texto = "Los párrafos cortos son aquellos párrafos que tienen entre tres y seis líneas. Si bien existen párrafos más extensos, que pueden llegar hasta las veinte líneas, lo recomendable es que un párrafo no tenga más de cuatro o cinco oraciones.";


const expresionRegular = /gato/g;


const nuevoTexto = texto.replace(expresionRegular, "pájaro");

console.log(nuevoTexto);
