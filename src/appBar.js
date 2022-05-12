import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchBar from './searchBar';
import DatePicker from './datePicker';
import SearchIcon from '@mui/icons-material/Search';
import SearchButton from './searchButton';
import { useState } from 'react'

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

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export default function PrimarySearchAppBar({ setFlightNumber, setDate }) {
    const [tempFlightNumber, setTempFlightNumber] = useState("6E7932")
    const [tempDate, setTempDate] = useState("2022-05-11")
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
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <SearchBar setTempFlightNumber={setTempFlightNumber} />
                    </Search>
                    <DatePicker setTempDate={setTempDate} />
                    <Box sx={{
                        width: 30,
                        height: 100
                    }}></Box>
                    <SearchButton tempFlightNumber={tempFlightNumber} tempDate={tempDate} setDate={setDate} setFlightNumber={setFlightNumber} />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
