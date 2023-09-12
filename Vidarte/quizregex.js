let texto = "#2Ffk1ghqfjYWXGXvvZJ0jjWJimdmBq";
let validacion = /^[a-zA-Z\d]+$/;
if (validacion.test(texto)) {
    console.log("La cadena es alfanumérica.");
  } else {
    console.log("La cadena no es alfanumérica.");
  }