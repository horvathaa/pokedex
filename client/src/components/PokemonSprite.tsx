import * as React from 'react'
import './Pokemon.css'
import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
export interface PokemonSpriteProps {
    pokemon: { [k: string]: any }
}
enum PokemonFacing {
    FRONT = 'front',
    BACK = 'back',
}
const PokemonSprite: React.FC<PokemonSpriteProps> = ({ pokemon }) => {
    const [facing, setFacing] = React.useState<PokemonFacing>(
        PokemonFacing.FRONT
    )
    const [hasBackSprite, setHasBackSprite] = React.useState<boolean>(
        pokemon.sprites?.back_default && pokemon.sprites?.back_shiny
    )
    const [shiny, setShiny] = React.useState<boolean>(false)

    React.useEffect(() => {
        setHasBackSprite(
            pokemon.sprites?.back_default && pokemon.sprites?.back_shiny
        )
    }, [pokemon])
    // console.log('pokemon', pokemon)
    function getSprite() {
        if (hasBackSprite) {
            if (shiny) {
                return facing === PokemonFacing.FRONT
                    ? pokemon.sprites?.front_shiny
                    : pokemon.sprites?.back_shiny
            } else {
                return facing === PokemonFacing.FRONT
                    ? pokemon.sprites?.front_default
                    : pokemon.sprites?.back_default
            }
        } else {
            if (shiny) {
                return pokemon.sprites?.front_shiny
            } else {
                return pokemon.sprites?.front_default
            }
        }
    }
    return (
        <div className={cn('flex', 'justifyContentCenter', 'alignItemsStart')}>
            <img
                className={cn({
                    'pokemon-sprite': true,
                    hasBackSprite: hasBackSprite,
                })}
                onClick={() => {
                    if (!hasBackSprite) return
                    return facing === PokemonFacing.FRONT
                        ? setFacing(PokemonFacing.BACK)
                        : setFacing(PokemonFacing.FRONT)
                }}
                src={getSprite()}
                alt={pokemon.name}
            />
            <div
                className={cn('pokemon-shiny', 'goldenrod')}
                onClick={() => setShiny(!shiny)}
            >
                {shiny ? (
                    <FontAwesomeIcon icon={faStarSolid} />
                ) : (
                    <FontAwesomeIcon icon={faStar} />
                )}
            </div>
        </div>
    )
}

export default PokemonSprite
