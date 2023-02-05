/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function crearClasePersona() {
  class Persona {
    constructor(nombre, edad, hobbies, amigos) {
      // El constructor de la clase Persona recibe nombre (string), edad (integer), hobbies (array de strings), amigos (array de objetos)
      // Inicializar las propiedades de la persona con los valores recibidos como argumento

      // Tu código aca:
            this.nombre = nombre;
            this.edad = edad;
            this.hobbies = hobbies;
            this.amigos = amigos;
        }

    addFriend(nombre, edad) {
      // El método 'addFriend' recibe un string 'nombre' y un entero 'edad' y debe agregar un objeto:
      // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
      // No debe retornar nada.

      // Tu código aca:
      let amigo = {
        nombre,
        edad
    }
    this.amigos.push(amigo);
  }

    addHobby(hobby) {
      // El método 'addHobby' recibe un string 'hobby' y debe agregarlo al arreglo de hobbies de la persona.
      // No debe retornar nada.

      // Tu código aca:

      this.hobbies.push(hobby);

    }
    getFriends() {
      // El método 'getFriends' debe retornar un arreglo con sólo los nombres del arreglo de amigos
      // de la persona.
      // Ej:
      // Suponiendo que la persona tiene estos amigos: [{nombre: 'martin', edad: 31},{nombre: 'toni', edad: 33}]
      // persona.getFriends() debería devolver ['martin', 'toni']

      // Tu código aca:
      const transformarObjetoAmigoANombre = ((amigo) => amigo.nombre);
            const indexed = this.amigos.map(transformarObjetoAmigoANombre);
            return indexed
        }

    getHobbies() {
      // El método 'getHobbies' debe retornar un arreglo con los hobbies de la persona
      // Ej:
      // persona.getHobbies() debe devolver ['correr', 'dormir', 'nadar']

      // Tu código aca:
      return this.hobbies
    }

    getPromedioEdad() {
      // El método 'getPromedioEdad' debe retornar el promedio de edad de los amigos de una persona
      // Ej:
      // Si la persona tuviera estos amigos:
      // {
      //   amigos: [{
      //     nombre: 'toni',
      //     edad: 33,
      //   }, {
      //     nombre: 'Emi',
      //     edad: 25
      //   }]
      // }
      // persona.getPromedioEdad() debería devolver 29 ya que (33 + 25) / 2 = 29

      // Tu código aca:
      return this.amigos.map(amigo => amigo.edad).reduce((a, b) => a + b) / this.amigos.length
    }
};

return Persona;
}
let amigos = [{
   nombre: 'toni',
  edad: 33,
}, {
  nombre: 'Emi',
  edad: 25
}]
let clasePersona = crearClasePersona()
//No tiene hobbys de momento
let persona = new clasePersona('Juan', 20, [], amigos)
//Mostramos los amigos
console.log("Los nombres de los amigos son:", persona.getFriends())
//Añadimos unos hobbys
persona.addHobby('programar')
persona.addHobby('correr')
// Mostramos los hobbys 
console.log("Los hobbys son:", persona.getHobbies())
//El promedio de la edad de los amigos
console.log("Promedio edad:", persona.getPromedioEdad())
//Añadir un nuevo amigo
persona.addFriend('Pedro', 20)
//Mostramos los amigos otra vez
console.log("Los nombres de los amigos son:", persona.getFriends())
//Y volvemos a calcular promedio de la edad de los amigos
console.log("Promedio edad:", persona.getPromedioEdad())

// No modifiques nada debajo de esta linea //

module.exports = crearClasePersona