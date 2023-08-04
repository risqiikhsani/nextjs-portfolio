"use client"

import LinkButton from '@/components/buttons/link-button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { HeaderUrl } from '@/constants/urls';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
export default function Header() {



    return (
        <>
            <IconButton>
                <HomeIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
                Risqi x hypernova
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 0 }}>
                {
                    HeaderUrl.map((i) => (
                        <LinkButton to={i.url} name={i.name} />
                    ))
                }
            </Box>
        </>
    );
}
