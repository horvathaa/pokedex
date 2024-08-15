import React from 'react'
import './Pokedex.css'
import { useEffect, useState } from 'react'
import SearchBar from './SearchBar'
import { mmlog } from 'mm-log'
import { fetchData } from '../utils/fetch'
import Pokemon from './Pokemon'

const Pokedex = () => {
    const [pokeName, setPokeName] = useState<String>('clodsire')
    const [pokeImage, setPokeImage] = useState<string>('')
    const [pokeData, setPokeData] = useState<{ [k: string]: any }>({})

    const updatePokeName = (name: String) => {
        setPokeName(name)
        return
    }

    mmlog()
    console.log('hi, pokemon', pokeImage)

    // can't use async in useEffect
    // but can use then statement
    // soo......
    useEffect(() => {
        // Write your fetch statement here!
        // It should fetch the link of the sprite for the given pokemon and store it inside the pokeImage state
        //
        const res = fetchData(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        console.log('res', res)
        res.then((data) => {
            console.log('data', data)
            // setPokeImage(data.sprites.front_default)
            setPokeData(data)
        })
    }, [pokeName])
    return (
        <div>
            <SearchBar setName={updatePokeName} />
            <div className="pokeImg-container">
                <Pokemon pokemon={pokeData} />
            </div>
        </div>
    )
}

export default Pokedex
