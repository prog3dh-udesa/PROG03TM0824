import { Component } from "react";
const APIKEY = '9458a99baf5a9ba3fe341cd43217ef95'

class Favoritos extends Component {
    constructor(props){
        super(props)
        this.state={
            peliculasFav: []
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem('categoriasFavs')
        if( storage !== null){
            let storageParseado = JSON.parse(storage)

            Promise.all(
                storageParseado.map(elm => 
                    fetch(`https://api.themoviedb.org/3/movie/${elm}?api_key=${APIKEY}`)
                    .then(resp => resp.json())
                )
            )
            .then(data => this.setState({peliculasFav: data}, ()=> console.log(this.state)))

        }
    }

    render(){
        return(
            <div>
                {
                    this.state.peliculasFav.length > 0 ?
                        this.state.peliculasFav.map(elm => <h1>{elm.title}</h1>)
                        : <h1>No hay peliculas Favs</h1>
                }
            </div>
        )
    }

}

export default Favoritos