import React from 'react'

export default function Details(props) {
    const id = props.match.params.id
  return (
    <div>Details de {id}
    </div>
  )
}
