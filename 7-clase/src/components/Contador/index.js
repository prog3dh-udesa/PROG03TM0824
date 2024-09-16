import React, { Component } from 'react'

const APIKEY = '9458a99baf5a9ba3fe341cd43217ef95'
class Contador extends Component {
    constructor(props){
        super(props)
        this.state = {
            valor: props.valor,
            peliculas:[]
        }
        console.log('Soy el constructor')
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}`)
        .then((resp) => resp.json())
        .then((data) => {
            this.setState({
                peliculas: data.results
            })
        })
        .catch((err) => console.log(err))

    }

    componentDidUpdate(){
        console.log('Soy el didUpdate')
        if(this.state.valor > 5){
            alert('5 ES EL VALOR MAXIMO')
            this.setState({valor: 5})
        }

    }

    componentWillUnmount(){
        console.log('Soy el willUnmount')
    }


    incrementar(){
        this.setState({
            valor: this.state.valor + 1
        })
    }

    decrementar(){
        this.setState({
            valor: this.state.valor - 1
        })
    }

    render(){
        console.log('Soy el render')
        return (
            <div>
                <h1>Soy el contador</h1>
                <h2>
                   {
                   this.state.valor
                   }
                </h2>
                <button onClick={
                    () => this.incrementar()
                    } >Incrementar</button>
                <button onClick={() => this.decrementar() } >Decrementar</button>
            </div>
        )
    }
}

export default Contador