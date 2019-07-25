var juan = {
  nombre: 'Juan',
  apellido: 'Lopez',
  edad: 28
};

var carla = {
  nombre: 'Carla',
  apellido: 'Tamariz',
  edad: 29
}

function imprimirNombreEnMayusculas(persona) {
  // var nombre = persona.nombre
  var { nombre } = persona // Declaramos la variable nombre que va a salir de persona.nombre
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(juan)
imprimirNombreEnMayusculas(carla)
imprimirNombreEnMayusculas({ nombre: 'Marcelo' })

function imprimirNombreYEdad(persona) {
  var { nombre, edad } = persona
  console.log( `Hola, me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreYEdad(juan)
imprimirNombreYEdad(carla)