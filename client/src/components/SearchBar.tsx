import React from 'react'
import { TextField, Autocomplete, Typography, Box } from '@mui/material'
import { useState } from 'react'
import './SearchBar.css'
import { pokemonNames } from '../utils/utils'

type props = {
    setName: (name: string) => void
}

const SearchBar = ({ setName }: props) => {
    const hint = React.useRef('')
    const [input, setInput] = useState('')
    return (
        <div className="searchContainer">
            <Autocomplete
                onKeyDown={(e) => {
                    if (e.key === 'Tab') {
                        if (hint.current) {
                            setInput(hint.current)
                            e.preventDefault()
                        }
                    }
                }}
                onClose={() => (hint.current = '')}
                onChange={(e, value) => {
                    console.log('val', value)
                    value && setName(value.toLowerCase())
                }}
                disablePortal
                inputValue={input}
                size={'medium'}
                sx={{ width: 300 }}
                renderInput={(params) => {
                    return (
                        <Box sx={{ position: 'relative' }}>
                            <Typography
                                sx={{
                                    position: 'absolute',
                                    opacity: 0.5,
                                    left: 14,
                                    top: 16,
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    width: 'calc(100% - 75px)', // Adjust based on padding of TextField
                                }}
                            >
                                {hint.current}
                            </Typography>
                            <TextField
                                placeholder="Enter Pokemon"
                                {...params}
                                onChange={(e) => {
                                    const newInput = e.target.value
                                    setInput(newInput)
                                    const match = pokemonNames.find((name) =>
                                        name.startsWith(newInput)
                                    )
                                    if (newInput && match) {
                                        hint.current = match
                                    } else {
                                        hint.current = ''
                                    }
                                }}
                            />
                        </Box>
                    )
                }}
                options={pokemonNames}
            />
        </div>
    )
}

export default SearchBar
