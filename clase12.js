var sacha = {
  nombre: 'Sacha',
  apellido: 'Lopez',
  edad: 28,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true
}

var juan = {
  nombre: 'Juan',
  apellido: 'Lopez',
  edad: 11
}

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`)

  if (persona.ingeniero) {
    console.log('Ingeniero')
  }

  if (persona.cantate) {
    console.log('Cantante')
  }

  if (persona.dj) {
    console.log('DJ')
  }

  if (persona.guitarrista) {
    console.log('Guitarrista')
  }

  if (persona.drone) {
    console.log('Piloto de drone')
  }
}

// Indicar que una variable es constante, y no va ser modificada
const MAYORIA_DE_EDAD = 18

//const esMayorDeEdad = function (persona) {
//  return persona.edad >= MAYORIA_DE_EDAD
//}

//const esMayorDeEdad = persona => persona.edad  >= MAYORIA_DE_EDAD

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

function permitirAcceso(persona) {
  if (!esMayorDeEdad(persona)) {
    console.log('Acceso denegado');
  }
}

