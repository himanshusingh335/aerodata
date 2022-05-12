
import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


export default function SearchBar({ setTempFlightNumber }) {

    function handleChange(e) {
        setTempFlightNumber(e.target.value);
    }

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

    return (<StyledInputBase
        placeholder="Search Flight Number"
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleChange}
    />)
}

