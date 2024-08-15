import React from 'react'
import { Button, TextField } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import './SearchBar.css'
import cn from 'classnames'

type props = {
    setName: any
}

const SearchBar = ({ setName }: props) => {
    const [input, setInput] = useState('')

    return (
        <div className="searchContainer">
            <TextField
                id="pokemon"
                size="medium"
                placeholder="Enter Pokemon"
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') setName(input)
                }}
            ></TextField>
            <a onClick={() => setName(input)}>
                <FontAwesomeIcon
                    className={cn('searchIcon', 'blue')}
                    icon={faMagnifyingGlass}
                    // style={{ color: '#137AC4' }}
                />
            </a>
        </div>
    )
}

export default SearchBar
