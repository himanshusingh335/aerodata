
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export default function SearchBar({ setFlightNumber }) {

    function handleChange1(e) {
        setFlightNumber(e.target.value);
    }

    return (<TextField
        autoFocus
        id="filled-basic"
        variant="filled"
        label="Flight number"
        type="text"
        fullWidth
        onChange={(e) => {
            handleChange1(e)

        }
        }
    />)
}

