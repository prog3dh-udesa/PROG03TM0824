import React from "react";
import Opcion from "../Opcion/Opcion";
import './styles.css'


const opciones = [
    {
        nombre:"Inicio",
        ruta: '/'
    }, 
    {
        nombre: "About us",
        ruta: "/about"
    },
    {
        nombre: "Personajes",
        ruta:"/personajes"
    },
    {
        nombre: "Favoritos",
        ruta:"/favoritos"
    }
]

function Navbar() {
    return(
        <nav>
            <ul className="main-nav">
               {
                opciones.map((elm) => <Opcion data={elm} /> )
               }
            </ul>
            <ul className="user">
                <li>Nombre usuario 
                    <img src="./imgs/user.jpg" alt="" />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar