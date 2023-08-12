import { Avatar, Box, Button, Container, Divider, IconButton, Paper, Stack, Typography } from "@mui/material";
import Image from 'next/image'
import BorderedPaper from "@/components/cards/bordered-paper";
import Home from "@/contents/mdx/home/Home.mdx";
import "highlight.js/styles/github-dark.css"
import CarouselMessages from "./_page/carousel-messages";
import { textColorBackground } from "@/styles/Styles";
import { NextLinkComposed } from "@/components/buttons/Link";
import Prose from "@/components/mdx/Prose";


// this 2 needs client component
// https://github.com/mui/material-ui/issues/38023
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';






const Page = async() => {
    return (
        <>
            <Box>
                <Typography variant="h1" sx={{ textAlign: 'center', ...textColorBackground }}>
                    Welcome to my portfolio
                </Typography>

                <Box sx={{ position: 'relative', my: '30px' }}>
                    <Image
                        src="/desk.jpg"
                        width={1920}
                        height={1080}
                        style={{width:'100%'}}
                        alt="desk"
                        priority={true}
                    />
                    <Box
                        sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'transparent', p: 4, borderRadius: 8 }}
                    >
                        <Typography variant="h1" sx={{ textAlign: 'center', ...textColorBackground }}>
                            Risqi Ikhsani
                        </Typography>

                        <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                            <Prose>
                            <Home />
                            </Prose>
                        </Box>



                        <Typography variant='h5' sx={{ color: 'white', textAlign: 'left', display: { xs: 'none', xl: 'block' } }}>
                            Hello, my name is Risqi , my nickname is Hypernova.
                            I'm a developer who has passion about Web development, Mobile development, desktop development, devOps, Game development .
                            <br />
                            Beside tech world ,I also love to see an amazing nature views. My most favorite country is Switzerland.
                        </Typography>

                        <Stack direction="row"

                            spacing={2} sx={{ my: '10px', display: { xs: 'none', xl: 'block' } }}>
                            <IconButton component={NextLinkComposed} to="https://github.com/risqiikhsani">
                                <Avatar
                                    alt="Github"
                                    src="/icons/github2.png"
                                    sx={{ width: 70, height: 70 }}
                                />
                            </IconButton>

                            <IconButton component={NextLinkComposed} to="https://www.linkedin.com/in/risqiikhsani/">
                                <Avatar
                                    alt="Linkedin"
                                    src="/icons/linkedin.png"
                                    sx={{ width: 70, height: 70 }}
                                />
                            </IconButton>


                        </Stack>



                    </Box>

                </Box>



                <Container maxWidth='md' sx={{ my: '30px' }}>

                    <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
                        <Prose>
                        <Home />
                        </Prose>
                    </Box>



                    <Typography variant='h5' sx={{ color: 'white', textAlign: 'left', display: { xs: 'block', xl: 'none' } }}>
                        Hello, my name is Risqi , my nickname is Hypernova.
                        I'm a developer who has passion about Web development, Mobile development, desktop development, devOps, Game development .
                        <br />
                        Beside tech world ,I also love to see an amazing nature views. My most favorite country is Switzerland.
                    </Typography>

                    <Stack direction="row"

                        spacing={2} sx={{
                            my: '10px',
                            display: { xs: 'block', xl: 'none' },
                        }}>
                        <IconButton component={NextLinkComposed} to="https://github.com/risqiikhsani">
                            <Avatar
                                alt="Github"
                                src="/icons/github2.png"
                                sx={{ width: 70, height: 70 }}
                            />
                        </IconButton>

                        <IconButton component={NextLinkComposed} to="https://www.linkedin.com/in/risqiikhsani/">
                            <Avatar
                                alt="Linkedin"
                                src="/icons/linkedin.png"
                                sx={{ width: 70, height: 70 }}
                            />
                        </IconButton>


                    </Stack >
                    <Divider sx={{ my: '20px', display: { xs: 'block', lg: 'none' } }} />

                    <Typography variant="h3" sx={{ textAlign: 'center', ...textColorBackground }}>
                        if I had several messages to spread the world , they would be:
                    </Typography>

                    <CarouselMessages />



                </Container>

                <Box sx={{ position: 'relative' }}>
                    <Image
                        src="/cat.jpg"
                        width={1920}
                        height={1080}
                        style={{width:'100%'}}
                        alt="desk"
                        priority={true}
                    />
                    <Box
                        sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'transparent', p: 4, borderRadius: 8 }}
                    >
                        
                            <Typography  variant="h5" sx={{ textAlign: 'center', color:'white' }}>
                                Cat as the best coding budy
                            </Typography>
                            <Typography  variant="h2" sx={{ textAlign: 'center', color:'white' }}>
                                PAWsitively Purrfect Pixels
                            </Typography>
                           
                       
                    </Box>
                </Box>
                <Box sx={{ position: 'relative' }}>
                    <Image
                        src="/coding2.jpg"
                        width={1920}
                        height={1080}
                        style={{width:'100%'}}
                        alt="desk"
                        // priority={true}
                    />
                    <Box
                        sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'rgba(255, 255, 255, 0.3)',px:1,borderRadius:2 }}
                    >
                        
                            <Typography  variant="h5" sx={{ textAlign: 'center', color:'#303633'  }}>
                                Gorgeous Nature Lover
                            </Typography>
                            <Typography  variant="h2" sx={{ textAlign: 'center', color:'#303633' }}>
                                Nothing can beat the Peacefulness
                            </Typography>
                           
                       
                    </Box>
                </Box>

            </Box>

        </>
    )
}

export default Page