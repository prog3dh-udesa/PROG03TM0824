import React from "react";
import {Link} from 'react-router-dom'
function Categoria(props) {
    const id = props.data.id
    return(
        <Link to={`/detalle/${id}`}>
                <article className="card">
                    <p>{props.data.nombre}</p>
                </article>
        </Link>
    )
}

export default Categoria