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

function imprimirProfesiones(persona){
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

