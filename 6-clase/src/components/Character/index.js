import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './styles.css'
class Personaje extends Component {
  constructor(props){
    super(props)
    this.state = {
      verMas: false,
      textoBoton: 'Ver Mas',
      seleccionado: false
    }
  }

  cambiarVerMas(){
    // if(this.state.verMas){
    //   this.setState({
    //     verMas: false,
    //     textoBoton: 'Ver Mas'
    //   })
    // } else {
    //   this.setState({
    //     verMas: true,
    //     textoBoton: 'Ver Menos'
    //   })
    // }

    this.setState({
      verMas: !this.state.verMas,
      textoBoton: this.state.verMas ? 'Ver Menos' : 'Ver Mas' 
    })

  }

  seleccionarYDeseleccionar(){
    this.setState({
      seleccionado: !this.state.seleccionado
    })
  }

  render(){
    return (
      <div
      onDoubleClick={()=> this.seleccionarYDeseleccionar()}
      className={`pepe hovered cardContianer ${this.state.seleccionado ? "active" : ''}`}>
          <img src={`./imgs/user.jpg`} />
          <Link to={`/personajes/id/${this.props.data.id}`}>
          {
          this.props.data.name
          }
          </Link>
          {
            this.state.verMas ?
              <p>
                Esta es la descripcion o el contenido que queriamos mostrar y ocultar
              </p>
              :
              null

          }
          <button onClick={() => this.cambiarVerMas()} >
            {this.state.textoBoton}
          </button>
          {/* <img src={`./imgs/${props.data.img}`} /> */}
      </div>
    )
  }
}

export default Personaje