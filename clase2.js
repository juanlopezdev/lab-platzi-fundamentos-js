var nombre = 'Juan', apellido = 'Lopez';

var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLocaleLowerCase();

var primerLetraDelNombre = nombre.charAt(0);
var cantidadDeLetrasDelNombre = nombre.length; // Atributo

var nombreCompleto = nombre + ' ' + apellido;
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}` // Nueva forma de concatenar

var str = nombre.substr(1,2)