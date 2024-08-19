const numeros = [1, 5, 7, 12, 89, 23]
let numerosDobles = numeros.map(( elm ) => elm * 2)
console.log(numerosDobles)

let numerosString = numeros.map((elm) => elm.toString())
console.log(numerosString)

let nombres = ["franco", "martina", "leonardo", "jose", "lucia", "josefina"];

const nombreMayusculas = nombres.map(( elm )=> elm.toUpperCase())

console.log(nombreMayusculas)

let personas = [
	{
        nombre: "Angelina Jolie",
        edad: 80
    },
    {
        nombre: "Eric Jones",
        edad: 2
    },
    {
        nombre: "Paris Hilton",
        edad: 5
    },
    {
        nombre: "Kayne West",
        edad: 16
    },
    {
        nombre: "Bob Ziroll",
        edad: 100
    }
];

const soloNombres = personas.map((elm) => elm.nombre)
console.log(soloNombres)

let matrix = personas.map((elm) => elm.edad >=60 ? `${elm.nombre} puede entrar` :`${elm.nombre} no puede entrar`)
console.log(matrix)

let enHtml = personas.map((elm) => `<h2>${elm.nombre}</h2><p>${elm.edad}</p>` )

console.log(enHtml)

//FILTER
let numerosDos = [66, 3, 2, 5, 26, 101];

let cincoOMas = numerosDos.filter((elm) => elm > 5)
console.log(cincoOMas)

let pares = numerosDos.filter((elm) => elm % 2 == 0)
console.log(pares)

let words = ["dog", "wolf", "by", "family", "eaten", "camping"];

let menosDeCincoLetras = words.filter((elm) => elm.length < 5)
console.log(menosDeCincoLetras)

let listaPersonas = [
    { nombre: "Angelina Jolie", afiliado: true },
    { nombre: "Eric Jones", afiliado: false },
    { nombre: "Paris Hilton", afiliado: true },
    { nombre: "Kayne West", afiliado: false },
    { nombre: "Bob Ziroll", afiliado: true }
];
    

let illuminati = listaPersonas.filter((elm) => elm.afiliado)
console.log(illuminati)

