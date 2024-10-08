import React from "react";
import Opcion from "../Opcion/Opcion";
import './styles.css'


const opciones = [
    "ADMIN", "Pages", "Charts", "Tables", "Adopcion gatos"
]

function Navbar() {
    return(
        <nav>
            <ul className="main-nav">
               {
                opciones.map((elm) => <Opcion name={elm} /> )
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