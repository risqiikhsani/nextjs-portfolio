import { Container } from "@mui/material"

interface Props{
    children: React.ReactNode
}

export default function Layout(props:Props){
    return(
        <>
        <Container maxWidth="lg">
        {props.children}
        </Container>
        </>
    )
}