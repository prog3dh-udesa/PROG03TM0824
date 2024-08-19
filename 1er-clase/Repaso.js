// function saludar(nombre, lastName){
//     console.log(`Buen dia ${nombre} ${lastName}`)
// }
// saludar("Pepe", "Grillo")function saludar(nombre, lastName){
//     console.log(`Buen dia ${nombre} ${lastName}`)
// }
// saludar("Pepe", "Grillo")

//Arrow function de un solo proceso
// let saludar = (nombre, lastName) => console.log(`Buen dia ${nombre} ${lastName}`)
// saludar("Maligno", "Torres")


// Arrow function de varios procesos
// let saludar =  (nombre, lastName, horaActual) => {
//     if(horaActual > 4 && horaActual < 15){
//         console.log(`Buen dia ${nombre} ${lastName}`)
//     } else if(horaActual >= 15 && horaActual < 20){
//         console.log(`Buenas tarde ${nombre} ${lastName}`)
//     } else {
//         console.log(`Buenas noches ${nombre} ${lastName}`)
//     }
// }
// saludar("Lionel", "Messi", 21)

// let saludar =  (nombre, lastName, horaActual) => {
//     if(horaActual === 6 || horaActual === 13 || horaActual === 21){
//         console.log(`Es hora de comer ${nombre} ${lastName}`)
//     } else {
//         console.log(`Es hora de trabajar ${nombre} ${lastName}`)
//     }
// }
// saludar("Diego", "Maradona", 21)

//CONDICIONALES TERNARIOS
let saludar = (nombre, lastName, horaActual) => {
    // let esHoraDeAlmorzar =  horaActual > 13 ?  "Si es hora de comer" : "No, no es hora de comer" 
    let esHoraDeAlmorzar =  horaActual > 13 
        ?  
         horaActual < 16 ?
            "Si es hora de almorzar"
            :
            "Es hora de la merienda" 
        : 
        "No, no es hora de comer" 
    console.log(esHoraDeAlmorzar)
}

saludar("", "", 13)



