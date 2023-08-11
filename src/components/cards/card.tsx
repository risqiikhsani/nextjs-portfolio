"use client"

import { useAppContext } from '@/context/AppContext';
import { CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { NextLinkComposed } from '../buttons/Link';
import { memo } from 'react';


interface Props {
    imageUrl?: string;
    url: string;
    name: string
    text?: string;
}

function CardBase(props: Props) {
    const { imageUrl, url, name, text } = props;
    const { CreateOpenToastModal } = useAppContext()

    const CardInner = () => (
        <>
            <CardMedia
                component="img"
                height="140"
                image={imageUrl}
                alt={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {text}
                </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
        </>
    )


    return (
        <>
            {url == "" || url == "/" ? (
                <Card sx={{ my: '30px' }}>
                    <CardActionArea onClick={() => CreateOpenToastModal("Error", "Sorry the page is not ready yet ! still under development")}>
                        <CardInner/>
                    </CardActionArea>
                </Card>
            ) : (
                <Card sx={{ my: '30px' }}>
                    <CardActionArea component={NextLinkComposed} to={url}>
                        <CardInner/>
                    </CardActionArea>
                </Card>
            )}

        </>

    );
}

export default memo(CardBase)