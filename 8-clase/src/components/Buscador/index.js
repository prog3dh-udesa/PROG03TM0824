import { Component } from "react";

class Buscador extends Component{
    constructor(props){
        super(props)
        this.state ={
            busqueda: ''
        }
    }

    cambioEnInput(event){
        this.setState({
            busqueda: event.target.value
        })
    }

    evitarSubmit(event){
        event.preventDefault()
        this.props.history.push(
            '/results', 
            {busqueda: this.state.busqueda}
        )
    }

    render(){
        return(
            <form onSubmit={(e) => this.evitarSubmit(e)}>
                <input value={this.state.busqueda} onChange={(e) => this.cambioEnInput(e)} />
                <button>Buscar</button>
            </form>
        )
    }

}

export default Buscador