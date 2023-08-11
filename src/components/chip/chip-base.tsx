import { Avatar, Chip, SxProps } from "@mui/material";


interface Props {
    name: string;
    url_picture?: string;
    sx?: SxProps;
}

export default function ChipBase(props: Props) {
    const { name, url_picture, sx } = props

    return (
        <>
            {url_picture ? (
                <Chip
                    sx={{p:'5px',m:'5px',...sx}}
                    avatar={<Avatar src={url_picture} />}
                    label={name}
                />
            ) : (
                <Chip
                    sx={{p:'5px',m:'5px',...sx}}
                    label={name}
                />
            )}

        </>
    )
}