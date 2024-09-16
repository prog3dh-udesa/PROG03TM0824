import React from 'react'
import personajes from '../../data/personajes'
import Character from '../Character'

export default function index() {
  return (
    <div>
        {
            personajes.map((elm) => <Character data={elm} /> )
        }
    </div>
  )
}
