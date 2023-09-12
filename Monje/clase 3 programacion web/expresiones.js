const regex = //;
const text = "";
// ^ para que el inicio se evalue con un valor
// $ para que el final se evalue con un valor (se pone al final)
// si se usa "^ $"  se evalua el patron completo
// si se usa " / \b/" busca la palabra que este dentro del texto
// si se usa * evalua que puede venir o no puede venir pero infinitas veces si se desea
// el simbolo + indica que por lo menos debe estar aquel caracter al que este atado
// el simbolo ? indica que podria venir o no podria venir pero solo una vez
// las {1,2,3,...} cuantifica las veces que puede ir el caracter
// \d especifica que debe ser un digito
// \D cualquier cosa menos un numero 
// [A-Za-z0-9_] ó \w se usa para los rangos de caracteres en ese caso ese es para que sea alfanumerico
// \s busca los espacios
// | se usa a manera de or
// palabra(=?) es un solo si se usa para que la palabra que lleva sea correcta si tiene otras condiciones ya sea \s\w+ etc...
// (?!8|9) esta se usa para que no contenga ciertos caracteres en este caso se pide que no contenga 8 ó 9
if(regex.test(text)){
    console.log("Es correcto , que chimba");
}else{
    console.error("Es incorrecto sog");
}