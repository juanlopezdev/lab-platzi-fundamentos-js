var sacha = {
  nombre: 'Sacha',
  apellido: 'Lopez',
  edad: 28,
  peso: 75
}


console.log(`Al inicio del año ${sacha.nombre} pesa ${sacha.peso}kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365
const META = sacha.peso - 3

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

var dias = 0

while (sacha.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(sacha)
  }

  if (realizaDeporte()) {
    adelgazar(sacha)
  }

  dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${sacha.nombre} adelgazó 3Kg`)