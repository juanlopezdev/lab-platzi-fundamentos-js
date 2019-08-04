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

// En las nuevas versiones de JS, podemos enviar solo el objeto con el atributo
// que necesitamos, como en el siguiente ejemplo
function imprimirNombreEnMayusculas({ nombre }) {
  var nombre = nombre.toUpperCase()
  console.log(nombre)
}

imprimirNombreEnMayusculas(juan)
imprimirNombreEnMayusculas(carla)
imprimirNombreEnMayusculas({ nombre: 'Marcelo'})