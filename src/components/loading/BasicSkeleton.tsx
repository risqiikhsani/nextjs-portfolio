import { Skeleton } from "@mui/material";

export default function BasicSkeleton() {
    return (
        <>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
        </>
    )
}