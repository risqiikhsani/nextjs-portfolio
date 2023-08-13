import { Container } from "@mui/material"

export const metadata = {
    title: "Contact Me",
}
interface Props{
    children: React.ReactNode
}

export default function Layout(props:Props){
    return(
        <>
        <Container>
        {props.children}
        </Container>
        </>
    )
}