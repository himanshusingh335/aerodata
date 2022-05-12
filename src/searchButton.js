import Button from '@mui/material/Button';
import * as React from 'react';

export default function SearchButton({ tempDate, tempFlightNumber, setDate, setFlightNumber }) {

    function searchItem() {
        setFlightNumber([tempFlightNumber]);
    }

    return (<Button color="secondary" variant="outlined"
        onClick={() => {
            searchItem()
        }}
    >
        Search
    </Button>)
}
