import React from 'react'
import '../globals.css'
import './Pokemon.css'

import { capitalizeFirstLetter } from '../utils/utils'
import PokemonSprite from './PokemonSprite'

interface PokemonProps {
    pokemon: { [k: string]: any }
}

const Pokemon: React.FC<PokemonProps> = ({ pokemon }) => {
    const [pokemonDescription, setPokemonDescription] =
        React.useState<string>('')
    React.useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                `https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}/`
            )
            // need to get data from separate json entry
            const data = await res.json()
            console.log('data in fetchData pokemon descrip', data, pokemon.id)
            const descripIdx = data.flavor_text_entries.findLastIndex(
                (e: any) => e.language.name === 'en'
            )
            console.log('descrip', descripIdx)
            const descriptionToUse =
                data.flavor_text_entries[descripIdx].flavor_text
            setPokemonDescription(descriptionToUse)
        }
        fetchData()
    }, [pokemon])
    return (
        <div>
            <PokemonSprite pokemon={pokemon} />
            <h1 className={'barlow-semibold'} style={{ textAlign: 'center' }}>
                {pokemon.name && pokemon.name.length
                    ? capitalizeFirstLetter(pokemon.name)
                    : ''}
            </h1>
            <p className={'barlow-light'} style={{ textAlign: 'center' }}>
                {pokemonDescription}
            </p>
        </div>
    )
}

export default Pokemon
