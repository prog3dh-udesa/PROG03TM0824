import React from "react";
import Categoria from "../Categoria";
function Categorias(){
    return(
        <section className="general-data">
            <Categoria numero={1} />
            <Categoria numero={2} />
            <Categoria numero={3} />
            <Categoria numero={4} />
            <Categoria numero={5} />
            <Categoria numero={6} />
        </ section>
    )
}

export default Categorias