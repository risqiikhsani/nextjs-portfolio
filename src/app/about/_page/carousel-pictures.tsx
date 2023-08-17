"use client"

import { pictures } from '@/constants/about'
import { Box } from '@mui/material'
import Image from 'next/image'
import Carousel from "react-material-ui-carousel"

export default function CarouselPictures() {
    return (
        <>
            <Carousel
                animation="slide"
            >
                {
                    pictures.map((a) => (
                        <Box sx={{}}>
                            <Image
                                src={a.url}
                                height={800}
                                width={1500}
                                sizes="100vw"
                                style={{
                                    borderRadius:'10px',
                                    width: '100%',
                                    maxHeight: '600px',
                                }}
                                alt={a.name}
                            />
                        </Box>

                    ))
                }
            </Carousel>
        </>
    )
}