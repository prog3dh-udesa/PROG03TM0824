import React, { Component } from 'react'

class Contador extends Component {
    constructor(props){
        super(props)
        this.state = {
            valor: props.valor,
        }
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