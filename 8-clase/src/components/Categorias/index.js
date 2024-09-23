import React from "react";
import Categoria from "../Categoria";
import { cloneElement } from "react";

const arrayCategorias = [
    {
        id: 957452,
        nombre: 'Categoria 1',
    },
    {
        id: 519182,
        nombre: 'Categoria 2',
    },
    {
        id: 365177,
        nombre: 'Categoria 3',
    },
    {
        id: 917496,
        nombre: 'Categoria 4',
    },
]
function Categorias(){
    return(
        <section className="general-data">
            {
                arrayCategorias.map((elm) => <Categoria data={elm} /> )
            }
        </ section>
    )
}

export default Categorias