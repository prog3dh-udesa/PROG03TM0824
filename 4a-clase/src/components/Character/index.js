import React from 'react'
import {Link} from 'react-router-dom'

export default function index(props) {
  return (
    <div>
        <Link to={`/personajes/id/${props.data.id}`}>
        {
        props.data.name
        }
        </Link>
        {/* <img src={`./imgs/${props.data.img}`} /> */}
        <img src={`./imgs/user.jpg`} />
        </div>
  )
}
