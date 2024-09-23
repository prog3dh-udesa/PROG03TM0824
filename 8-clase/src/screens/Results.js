import React, { Component } from 'react'
const APIKEY = '9458a99baf5a9ba3fe341cd43217ef95'

export default class Results extends Component {
    constructor(props){
        super(props)
        this.state = {
            resultados: []
        }
    }

    componentDidMount(){
        const loQueBuscaElUsuario = this.props.history.location.state.busqueda
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${loQueBuscaElUsuario}`)
        .then(resp => resp.json())
        .then(data => {
            console.log('data', data)
            this.setState({resultados: data.results})})
    }

  render() {
    return (
      <div>
        {
            this.state.resultados.length > 0 ?
                this.state.resultados.map(elm => <h1>{elm.title}</h1>)
            :
            <h1>No hay resultados de busqueda</h1>
        }
      </div>
    )
  }
}
