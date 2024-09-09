import React, { Component } from 'react'

const APIKEY = '9458a99baf5a9ba3fe341cd43217ef95'
class Peliculas extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculas:[]
        }
        console.log('Soy el constructor')
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}`)
        .then((resp) => resp.json())
        .then((data) => {
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

    render(){
        console.log('Soy el render')
        return (
            <div>
                {
                    this.state.peliculas.length > 0 
                    ?
                    this.state.peliculas.map((elm)=> <h1>{elm.title}</h1>)
                    :
                    <h1>Cargando</h1>
                }
            </div>
        )
    }
}

export default Peliculas