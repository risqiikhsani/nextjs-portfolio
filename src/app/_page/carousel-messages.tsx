"use client"
import BorderedPaper from "@/components/cards/bordered-paper"
import { Box, Typography } from "@mui/material"
import Carousel from "react-material-ui-carousel"

const messagesData = [
    " Keep spreading kindness as much as you can ",
    "Do what you gotta do for you and the people you love, because our life time isn't unlimited.",
    "There is this quote : `The universe is a pretty big place. If it's just us, seems like an awful waste of space. -- Carl Sagan `. It makes me somewhat believe that we're not alone in this unknownly huge universe ! ",
    "some people say `money can't buy happiness` . To me it's not accurate, because with them you can make poor , sick and starving human & animals HAPPIER ! ",
    "If you're in doubt between Dog or Cat , Dog can get rabbies, There are news of Dog attacked people and childrens. So cuddle with cat ! "
]

const textColorBackground = {
    textTransform: 'none',
    background: 'linear-gradient(90deg, hsla(154, 100%, 76%, 1) 0%, hsla(234, 100%, 83%, 1) 50%, hsla(288, 100%, 81%, 1) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
}

export default function CarouselMessages() {
    return (
        <>
            <Carousel
                animation="slide"
            >
                    {messagesData.map((data) => (
                        <BorderedPaper key={data} sx={{height:'300px'}}>
                            <Typography variant="h5" sx={{ textAlign: 'center', ...textColorBackground }}>
                                {data}
                            </Typography>
                        </BorderedPaper>
                    ))}
            </Carousel>
        </>
    )
}