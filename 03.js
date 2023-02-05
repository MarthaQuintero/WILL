/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
//function buscarAmigo(amigos, nombre) {
  // La funcion llamada 'buscarAmigo' recibe como argumento un array llamado 'amigos' que contiene
  // en cada posición del arreglo un objeto que tiene como propiedades 'nombre' y 'edad'. También
  // recibe un string llamado 'nombre'.
  // Debe devolver el objeto cuya propiedad 'nombre' coincida con el string 'nombre' recibido por argumento.
  // Ej:
  //  var amigos = [{ nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];
  //  buscarAmigo(amigos, 'toni') debe devolver { nombre: 'toni', edad: 33 };

  // Tu código aca:
  var amigos = [{nombre: 'toni', edad: 33 } , { nombre: 'Emi', edad: 25 }];

  function buscarAmigo(amigos, nombre) {
    var i = 0;
    // Mientras queden elementos por comprobar en el array y el nombre del elemento actual no sea el nombre que buscamos, pasamos al elemento siguiente
    while (i < amigos.length && amigos[i].nombre != nombre) {
      i++;
    }
    // Si el motivo por el que se ha salido del array es porque no quedan elementos por comprobar devolver null (no se ha encontrado). En caso contrario devolver el elemento en la posición i (posición en la que se ha encontrado ele lemento)
    if (i < amigos.length) {
      return amigos[i];
    }
    else {
      return null;
    }
  }
  console.log(buscarAmigo(amigos, 'toni'));       // Devuelve {nombre: 'toni', edad: 33 }
  console.log(buscarAmigo(amigos, 'marta'));      // Devuelve null (no encontrado)
  

// No modifiques nada debajo de esta linea //

module.exports = buscarAmigo