import React, { Component } from 'react'
import Pokecard from './Pokecard'

class Pokedex extends Component {
    render() {
        let { exp, isWinner } = this.props
        let title = ''
        if (isWinner) {
            title = <h2 className='winner'>Winner</h2>
        }
        else {
            title = <h2 className='loser'>Loser</h2>
        }
        return (
            <div>
                <div className='info'>
                    {title}
                    <p> Total Experience : {exp} </p>
                </div>

                <div className='Pokedex-card'>
                    {
                        this.props.pokemon.map((p) => {
                            return <Pokecard id={p.id} name={p.name} type={p.type} exp={p.exp} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Pokedex