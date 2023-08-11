import { Skeleton } from "@mui/material";

export default function CardSkeleton(){
  return(
    <>
    <Skeleton variant="rectangular" width={210} height={118} />
    <Skeleton />
    <Skeleton animation="wave" />
    </>
  )
}