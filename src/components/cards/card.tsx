import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import { NextLinkComposed } from '../buttons/Link';
import Link from 'next/link';
import LinkButton from '../buttons/link-button';
import Image from "next/image";


interface Props {
    imageUrl?: string;
    url: string;
    name: string
    text?: string;
}

export default function CardBase(props: Props) {
    const { imageUrl, url, name, text } = props;

    return (
        <Card sx={{ maxWidth: 345, m: '20px' }}>
            <CardActionArea component={NextLinkComposed} to={url}>
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
            </CardActionArea>
        </Card>
    );
}