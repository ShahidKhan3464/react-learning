import React, { Component } from 'react'
import Pokedex from './Pokedex'

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            { id: 4, name: 'Charmander', type: 'fire', exp: 62 },
            { id: 7, name: 'Squirtle', type: 'water', exp: 63 },
            { id: 11, name: 'Metapod', type: 'bug', exp: 117 },
            { id: 12, name: 'ButterFree', type: 'flying', exp: 72 },
            { id: 25, name: 'Pikacnu', type: 'electric', exp: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', exp: 95 },
            { id: 94, name: 'Gengar', type: 'poison', exp: 225 },
            { id: 133, name: 'Eevee', type: 'normal', exp: 67 }
        ]
    }
    render() {
        let hand1 = []
        let hand2 = [...this.props.pokemon]
        while (hand1.length < hand2.length) {
            let randIndex = Math.floor(Math.random() * hand2.length)
            var randPokemon = hand2.splice(randIndex, 1)[0]
            hand1.push(randPokemon)
        }

        let exp1 = hand1.reduce((i, pokemon) => i + pokemon.exp, 0)
        let exp2 = hand2.reduce((j, pokemon) => j + pokemon.exp, 0)

        return (
            <div>
                <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
                <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
            </div>
        )
    }
}

export default Pokegame;