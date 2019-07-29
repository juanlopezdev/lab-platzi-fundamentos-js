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

// Cuando los objetos se pasan como una referencia, estos se modifican 
// fuera de la función. Para solucionar esto se puede crear un objeto diferente.
// Esto lo podemos hacer colocando tres puntos antes del nombre. Ej …persona.

// Esta función nos retorna una nueva persona, en este caso
// un año más que la anterior.
function cumpleanos(persona) {
  return {
    ...persona,
    edad: persona.edad + 1
  }
}