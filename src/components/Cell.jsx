import React from 'react'
import { isLightSquare } from '../functions/'
import './Cell.css'
const cell = ({ cell, index }) => {
    const light = isLightSquare(cell.pos, index)
    return (
        <div className={ `cell ${light ? 'light' : 'dark'}` }>
            { cell.pos }
        </div>
    )
}

export default cell
