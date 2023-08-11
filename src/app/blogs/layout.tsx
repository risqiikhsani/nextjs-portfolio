import { Container } from "@mui/material"

interface Props{
    children: React.ReactNode
}

export default function Layout(props:Props){
    return(
        <>
        <Container maxWidth="md">
        {props.children}
        </Container>
        </>
    )
}