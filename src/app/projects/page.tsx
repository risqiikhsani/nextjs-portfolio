import CardBase from "@/components/cards/card";
import { ProjectUrl } from "@/constants/projects";


export default function Page(){
    return(
        <>
            {ProjectUrl.map((p) => (
                <CardBase key={p.name} text={p.text} url={p.url} imageUrl={p.imageUrl} name={p.name} />
            ))}
        </>
    )
}