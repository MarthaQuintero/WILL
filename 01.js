//function soloNumeros(array) {
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej: 
  // soloNumeros([1, 'hola', 2]) debe retornar [1, 2]

  // Tu código aca:
  var array = [1, 2, 3, "t", 4, "yy", "yy", "yy",];
var arraynuevo = [];


for(let i = 0; i < array.length ; i++){

if( typeof array[i] === "number"){

arraynuevo.push(array[i]);

}


console.log(arraynuevo);
}
