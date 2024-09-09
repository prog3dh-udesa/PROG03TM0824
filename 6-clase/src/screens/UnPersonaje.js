import React from 'react'
import personajes from '../data/personajes'

export default function UnPersonaje(props) {
  let id = props.match.params.id
  let miPersonaje = personajes.filter((elm) => elm.id == id)
  console.log('personaje encontrado',miPersonaje)
  return (
    <div>
      {miPersonaje[0].name}
      </div>
  )
}
