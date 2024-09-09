import React from "react";
import Categoria from "../Categoria";
import { cloneElement } from "react";

const arrayCategorias = [
    {
        id: 1,
        nombre: 'Categoria 1',
    },
    {
        id: 2,
        nombre: 'Categoria 2',
    },
    {
        id: 3,
        nombre: 'Categoria 3',
    },
    {
        id: 4,
        nombre: 'Categoria 4',
    },
    {
        id: 5,
        nombre: 'Categoria 5',
    },
    {
        id: 6,
        nombre: 'Categoria 6',
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