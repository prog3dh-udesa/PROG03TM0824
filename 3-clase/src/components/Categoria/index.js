import React from "react";

function Categoria(props) {
    let { numero } = props
    return(
        <article className="card">
            <p>Category {numero}</p>
        </article>
    )
}

export default Categoria