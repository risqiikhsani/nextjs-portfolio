import { Box, Typography } from "@mui/material";
import Image from 'next/image'

export default function Page() {
    return (
        <>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h1" sx={{ textTransform: 'none' }}>
                    Welcome to my portfolio
                </Typography>

                <Typography>
                    Risqi Ikhsani
                </Typography>

                <Image
                    src="/desk.jpg"
                    width={1920}
                    height={1080}
                    alt="desk"
                />

                <Typography>
                    const his_tech_passion = ["FullStack","FrontEnd","BackEnd","DevOps","Game Development"]
                    const his_other_passion = ["Cat Lover kind of guy","Gorgeous Nature Blesser","`Keep Spreading Kindness` Quoter"]
                </Typography>

                <Typography>
                    Hello, I'm a frontEnd and backEnd developer. and I have a passion for crafting immersive digital experiences that blend creativity with technology. My journey in the world of development began with a spark of curiosity, and it has evolved into a relentless pursuit of excellence in both front-end and back-end technologies.
                </Typography>

                <Typography>
                    Imagine a world where ideas come to life, where imagination knows no bounds, and where creativity flows like an endless river. Welcome to my portfolio, a realm where pixels and lines dance together, giving birth to captivating experiences and unforgettable journeys.

                    I am a passionate and adventurous creator, an explorer of the digital universe. With a paintbrush of code and a canvas of design, I bring dreams to reality, shaping the intangible into the extraordinary. From elegant websites that whisper enchanting stories to apps that empower and connect, I thrive on crafting unique digital wonders that leave a lasting impression.

                    Every project is an odyssey, a thrilling expedition into uncharted territories of technology and aesthetics. I embark on each journey with a curious heart, fueled by the desire to innovate and inspire. My toolkit is vast and versatile, encompassing the latest technologies, cutting-edge frameworks, and a dash of good old-fashioned ingenuity.

                    As a relentless seeker of excellence, I meticulously weave functionality and aesthetics together, ensuring every pixel has a purpose and every line sings in harmony. User experience is at the core of my creations, and I revel in the joy of watching users explore and engage with the products of my imagination.

                    Beyond the realm of bits and bytes, I am a collaborator, a storyteller, and a problem solver. I thrive in the embrace of a creative team, bouncing ideas off each other like cosmic collisions that give birth to stars. Together, we conquer challenges, unlock hidden potential, and turn visions into concrete realities that stand the test of time.

                    So, come, join me on this journey through a wonderland of imagination and innovation. Let's dive into the depths of creativity and emerge with something extraordinary, something that transcends the ordinary and embraces the extraordinary.

                    Thank you for stepping into my world, and I look forward to crafting magic together!
                </Typography>
            </Box>

        </>
    )
}