import React from 'react'
import '../globals.css'
import './Pokemon.css'

import { capitalizeFirstLetter } from '../utils/utils'
import PokemonSprite from './PokemonSprite'

interface PokemonProps {
    pokemon: { [k: string]: any }
}

const Pokemon: React.FC<PokemonProps> = ({ pokemon }) => {
    return (
        <div>
            <PokemonSprite pokemon={pokemon} />
            <h1 className={'barlow-semibold'} style={{ textAlign: 'center' }}>
                {pokemon.name && pokemon.name.length
                    ? capitalizeFirstLetter(pokemon.name)
                    : ''}
            </h1>
        </div>
    )
}

export default Pokemon
