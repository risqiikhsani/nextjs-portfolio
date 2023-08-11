"use client"

import { Divider, IconButton, Stack, Typography } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

export default function Email(){
    
    const [email,setEmail] = useState("risqiikhsani16@gmail.com")
    const notify = () => toast.success('Copied text');
    return(
        <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    my: '20px',
                    border:'5px solid cyan',
                    p:'20px',
                    borderRadius:'30px',
                }}
            >
                <Typography variant="h6">
                    {email}
                </Typography>
                <IconButton aria-label="copy" onClick={() => {navigator.clipboard.writeText(email);notify()}}>
                    <ContentCopyIcon />
                </IconButton>
                
            </Stack>
    )
}