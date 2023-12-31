"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setBackground, setDarkTheme } from "@/redux/slices/themeSlice";
import { Stack } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import * as React from 'react';

const backgroundTheme = [
    {
        value: 'linear-gradient(to left, #74ebd5, #acb6e5)',
        name: 'Default Light',
    },
    {
        value: 'linear-gradient(to left, #0f2027, #203a43, #2c5364)',
        name: 'Default Dark',
    },
    {
        value: 'linear-gradient(to right, #40e0d0, #ff8c00, #ff0080)',
        name: 'Wedding Day',
    },
    {
        value: 'linear-gradient(to right, #fc5c7d, #6a82fb)',
        name: 'Sublime Light',
    },
    {
        value: 'linear-gradient(to left, #00b09b, #96c93d)',
        name: 'Ohhappiness',
    },
    {
        value: 'linear-gradient(to left, #cac531, #f3f9a7)',
        name: 'Sulphur',
    },
    {
        value: 'linear-gradient(to left, #800080, #ffc0cb)',
        name: 'Pink Flavour',
    },
    {
        value: 'linear-gradient(to left, #00f260, #0575e6)',
        name: 'Rainbow Blue',
    },
    {
        value: 'linear-gradient(to left, #667db6, #0082c8, #0082c8, #667db6)',
        name: 'Hydrogen',
    },
]

export default function RightDrawer() {
    const darkTheme = useAppSelector((state) => state.theme.darkTheme)
    const background = useAppSelector((state) => state.theme.background)
    const fontTheme = useAppSelector((state) => state.theme.fontTheme)
    const dispatch = useAppDispatch()


    const [bt, setBt] = React.useState(background);

    const handleChange = (event: SelectChangeEvent) => {
        const value = event.target.value as string;

        // Find the selected theme object based on the value
        const selectedTheme = backgroundTheme.find((theme) => theme.value === value);

        if (selectedTheme) {
            setBt(selectedTheme.value); // Set the name of the selected theme
            dispatch(setBackground(selectedTheme.value))
        }
    };


    return (
        <>
        {console.log(darkTheme)}
        {console.log(background)}
        {console.log(fontTheme)}
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <FormGroup>
                    <FormControlLabel
                        control={<MaterialUISwitch sx={{ m: 1 }} checked={darkTheme} onChange={() => dispatch(setDarkTheme(!darkTheme))} />}
                        label={darkTheme ? 'Dark Mode':'Light Mode'}
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl fullWidth>
                        <InputLabel id="backgroundSelector">Background</InputLabel>
                        <Select
                            labelId="backgroundSelector"
                            id="demo-simple-select"
                            value={bt}
                            label="Background"
                            onChange={handleChange}
                        >
                            {backgroundTheme.map((a, index) => (
                                <MenuItem key={index} value={a.value}>
                                    {a.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </FormGroup>
            </Stack>
        </>
    )
}

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));