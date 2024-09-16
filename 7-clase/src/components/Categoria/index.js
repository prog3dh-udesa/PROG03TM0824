import React, {Component} from "react";
import {Link} from 'react-router-dom'

class Categoria extends Component {
    constructor(props){
        super(props)
        this.state={
           esFavorito: false 
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem('categoriasFavs')
        if(storage !== null){
            let arrParseado = JSON.parse(storage)
            let estaMiId = arrParseado.includes(this.props.data.id)
            if(estaMiId){
                this.setState({
                    esFavorito: true
                })
            }
        }
    }




    agregarAStorage(id){
        let storage = localStorage.getItem('categoriasFavs')
        if(storage !== null){
            let storageParseado = JSON.parse(storage)
            storageParseado.push(id)
            let storageStringificado = JSON.stringify(storageParseado)
            localStorage.setItem('categoriasFavs', storageStringificado)
        } else {
            let arrFavs = [id]
            let favsStringificado = JSON.stringify(arrFavs)
            localStorage.setItem('categoriasFavs', favsStringificado)
        }

        this.setState({
            esFavorito: true
        })
    }
    
    render(){
        const id = this.props.data.id
        return(
            <div>
            <Link to={`/detalle/${id}`}>
                    <article className="card">
                        <p>{this.props.data.nombre}</p>
                    </article>
            </Link>
            {
                this.state.esFavorito ?
                <button>
                    Sacar de favs
                </button>
                :
                <button onClick={() => this.agregarAStorage(this.props.data.id) }>
                    Categoria Fav
                </button>
            }
            </div>
        )
    }
}

export default Categoria