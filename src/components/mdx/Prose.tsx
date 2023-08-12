

interface Props {
    children: React.ReactNode
}

export default function Prose(props:Props){
    
    return(
        <>
        <article className="dark:prose-invert prose prose-slate max-w-none">
            {props.children}
        </article>
        </>
    )
}