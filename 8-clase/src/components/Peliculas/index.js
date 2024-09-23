import React, { Component } from 'react'
import MiComponenteControlado from '../MiComponenteControlado'

const APIKEY = '9458a99baf5a9ba3fe341cd43217ef95'
class Peliculas extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculas:[],
            paginaACargar: 2
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}`)
        .then((resp) => resp.json())
        .then((data) => {
            console.log('Data que recibi', data)
            setTimeout(() => this.setState({
                peliculas: data.results
            }), 3000)
            

        })
        .catch((err) => console.log(err))

    }

    componentDidUpdate(){
        console.log('Soy el didUpdate')
    }

    componentWillUnmount(){
        console.log('Soy el willUnmount')
    }

    filtrarPeliculas(nombrePelicula){
        const peliculasFiltradas = this.state.peliculas.filter(
            (elm) => elm.title.toLowerCase().includes(nombrePelicula.toLowerCase()) 
        )

        this.setState({
            peliculas: peliculasFiltradas
        })
        
    }

    cargarMas(){
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&page=${this.state.paginaACargar}`)
        .then(resp => resp.json())
        .then(data => this.setState({
            peliculas: this.state.peliculas.concat(data.results),
            peliculasBackup: this.state.peliculas.concat(data.results),
            paginaACargar: this.state.paginaACargar + 1
        }))
        .catch(err => console.log(err))

    }

    render(){
        console.log('Soy el render')
        return (
            <div>
                <MiComponenteControlado filtrarPeliculas={ (nombre) => this.filtrarPeliculas(nombre) } />
                {
                    this.state.peliculas.length > 0 
                    ?
                    this.state.peliculas.map((elm)=> <h1>{elm.title}</h1>)
                    :
                    <h1>Cargando</h1>
                }`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}`
                {
                    this.state.paginaACargar < 450 ?
                        <button onClick={()=> this.cargarMas()}>
                            Cargar mas
                        </button>
                    :
                        ''
                }
            </div>
        )
    }
}

export default Peliculas