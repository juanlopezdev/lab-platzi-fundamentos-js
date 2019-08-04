var signo = prompt('Cual es tu signo?')

switch (signo) {
  case 'acuario':
    console.log('Horoscopo de acuario')
    break
  case 'piscis':
    console.log('Horoscopo de piscis')
    break
  case 'cancer':
  case 'cáncer':
    console.log('Horoscopo de cancer')
    break
  default:
    console.log('No encontramos datos')
    break
}