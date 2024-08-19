let estudiantes = [
    {
        nombre: 'Pepe',
        edad: 23
    },
    {
        nombre: 'Romina',
        edad: 16
    },
    {
        nombre: 'Pablo',
        edad: 19
    }
]

// let estudiantesQueEntran = estudiantes.map((elm) => {
//     if(elm.edad >= 18){
//         elm.puedeEntrar = true
//         return elm
//     } else {
//         elm.puedeEntrar = false
//         return elm
//     }
// })

let estudiantesQueEntran = estudiantes.map((elm) => elm.edad >= 18 ? 
{
    ...elm, puedeEntrar: true 
} 
: { ...elm, puedeEntrar: false} 
)

console.log('Resultado map estudiantes', estudiantesQueEntran)

const bienvenidos = estudiantes.filter((elm)=> elm.edad >= 18)

console.log('Bienvenidos son:', bienvenidos)

//DESTRUCTURING 
const objetoComplejo = {
    nombre: 'Pedro',
    edad: 23,
    leGusta:{
        comer:[
            'Pizza', 'Panchos', 'Pasta'
        ],
        salir:[
            'Plazas', 'Cancha', 'Boliche'
        ],
        jugar:['Fornite', 'COD']
    }
}

console.log(objetoComplejo.leGusta.salir)

const { leGusta : gustosUsuario } = objetoComplejo
console.log(gustosUsuario)

