let subject = "Soy un string"
let year = 2024

let favoriteSites = ["instagram.com", "nike.com", "mercadolibre.com.ar"]

console.log(favoriteSites[2])

favoriteSites.pop()

favoriteSites.push("tiktok.com")
console.log(favoriteSites)

let person = {
    name : "Mike" ,
    lastName: "Wasowsky",
    age: 37
}

// console.log(`Hola soy ${person.name} ${person.lastName} y tengo ${person.age} años`)

let saludar = (personaQueQueremoUtilizar) => console.log(`Hola soy ${personaQueQueremoUtilizar.name} ${personaQueQueremoUtilizar.lastName} y tengo ${personaQueQueremoUtilizar.age} años`)
saludar(person)

person.sites = favoriteSites
console.log(person)

let cursos = [
    {
        nombreCurso: "Programacion",
        descripcion: "Pepe cursa aqui",
        cantAlumnos: 3,
        seCursa: ["Lunes", "Martes"]
    },
    {
        nombreCurso: "Programacion2",
        descripcion: "Pepe cursa aqui",
        cantAlumnos: 3,
        seCursa: ["Lunes", "Martes"]
    },
    {
        nombreCurso: "Programacion3",
        descripcion: "Pepe cursa aqui",
        cantAlumnos: 3,
        seCursa: ["Lunes", "Martes"]
    },
    {
        nombreCurso: "Programacion4",
        descripcion: "Pepe cursa aqui",
        cantAlumnos: 3,
        seCursa: ["Lunes", "Martes"]
    },
    {
        nombreCurso: "Programacion5",
        descripcion: "Pepe cursa aqui",
        cantAlumnos: 3,
        seCursa: ["Lunes", "Martes"]
    },
    {
        nombreCurso: "Programacion6",
        descripcion: "Pepe cursa aqui",
        cantAlumnos: 3,
        seCursa: ["Lunes", "Martes"]
    }
]

console.log(cursos[2])
console.log(cursos[3].nombreCurso)

cursos[1].seCursa.push("Sabado")

for(let i = 0; i < cursos.length; i++){
    cursos[i].alumnos = [
        {name: "Pepe", apellido: "Grillo"},
        {name: "Pepe2", apellido: "Grillo2"},
        {name: "Pepe3", apellido: "Grillo3"},
    ]
}

console.log(cursos[2].alumnos[0].apellido)

let saludar2 = () => "Hola"

console.log(saludar2())

let multiplicar = (valor1, valor2) => valor1 * valor2 

console.log(multiplicar(5, 10))

let funcionConNombre = (funcionRecibida) => console.log(funcionRecibida())

funcionConNombre(() => "Soy una funcion sin nombre")

let esPar = (numero) => numero % 2 === 0

console.log(esPar(4))






