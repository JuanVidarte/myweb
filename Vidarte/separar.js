let text = " Dividir una cadena en palabras";
let patron = /\s+/g;
console.log(text.split(patron).filter(palabra => palabra !== ""));