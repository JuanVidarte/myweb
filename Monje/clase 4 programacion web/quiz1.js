const texto = "Los párrafos cortos son aquellos párrafos que tienen entre tres y seis líneas. Si bien existen párrafos más extensos, que pueden llegar hasta las veinte líneas, lo recomendable es que un párrafo no tenga más de cuatro o cinco oraciones.";

const expresionRegular = /párrafos/g;

const nuevoTexto = texto.replace(expresionRegular, "historia");

console.log(nuevoTexto);