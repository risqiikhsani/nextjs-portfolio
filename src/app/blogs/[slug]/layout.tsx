import { Container } from "@mui/material"

interface Props{
    children: React.ReactNode
}

export default function Layout(props:Props){
    return(
        <>
        <Container maxWidth="md" sx={{bgcolor:'white',p:'30px',borderRadius:'10px'}}>
        {props.children}
        </Container>
        </>
    )
}