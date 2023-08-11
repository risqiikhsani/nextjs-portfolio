import CardBase from "@/components/cards/card";
import { ProjectUrl } from "@/constants/projects";
import { Stack } from "@mui/material";


const Page = async() => {
    return (
        <>
            {ProjectUrl.map((p) => (
                <CardBase key={p.name} text={p.text} url={p.url} imageUrl={p.imageUrl} name={p.name} />
            ))}
        </>
    )
}

export default Page