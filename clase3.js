var edad = 27

// edad = edad + 1
edad += 1 // Incrementar edad en 1

var peso = 75

// peso = peso -20
peso -= 20 // Disminuir peso en 20

var sandwich = 1

peso += sandwich

var jugarAlfutbol = 3

peso -= jugarAlfutbol

var precioDeVino = 200.3

var total = precioDeVino * 3
// resultado: 600.900000000001
// Javascript no es tan preciso
// Para resolver esto hay que hacerlo de esta forma
total = precioDeVino * 100 * 3 / 100 // 600.9
// O aplicar
total = Math.round(precioDeVino * 100 * 3) / 100; // 600.9

var totalStr = total.toFixed(2) //600.90
// produce 2 decimales despues de la coma

var total2 = parseFloat(totalStr); //str to decimal

var pizza = 8
var personas = 2
var cantidadDePorcionesPorPersona = pizza / personas

