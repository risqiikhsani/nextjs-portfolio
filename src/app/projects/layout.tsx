import { Container } from "@mui/material"

export const metadata = {
    title: "Projects",
}

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