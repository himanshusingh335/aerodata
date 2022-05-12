import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchBar from './searchBar';
import DatePicker from './datePicker';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

export default function PrimarySearchAppBar({ setFlightNumber, setDate }) {

    return (
        <Box sx={{ flexGrow: 1, }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        AeroData
                    </Typography>
                    <Search>
                        <SearchBar setFlightNumber={setFlightNumber} />
                    </Search>
                    <DatePicker setDate={setDate} />
                    <Box sx={{
                        width: 30,
                        height: 100
                    }}></Box>
                    <Button color="secondary" variant="outlined"
                        onClick={() => {
                            alert('clicked');
                        }}
                    >
                        Search
                    </Button>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
