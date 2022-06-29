import React, { Component } from 'react'
import './pokeCard.css'
let Poke_Api = 'https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/'

class Pokecard extends Component {
    render() {
        let { id, name, type, exp } = this.props
        let imgSrc = `${Poke_Api}${id}.png`
        return (
            <div className='PokeCard'>
                <h1> {name} </h1>
                <img src={imgSrc} alt={name} />
                <div>Type: {type} </div>
                <div>Exp: {exp} </div>
            </div>
        )
    }
}

export default Pokecard;