function validarEdad() {
    var edad = document.getElementById('edad').value;

    if(edad < 18 && edad >= 1){
        alert("usted es menor de edad")
    } else if(edad>=18 && edad<=100) { 
        alert("usted es mayor de edad")
    } else {
        alert("valores por fuera del rango de edad 1-100")
    }
}