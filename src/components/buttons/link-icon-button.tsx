//https://mui.com/material-ui/guides/routing/#next-js

import Button from '@mui/material/Button';
import { NextLinkComposed } from './Link';
import { IconButton } from '@mui/material';

interface IndexProps {
    name: string;
    to: string | { pathname: string; query?: any };
    muiIcon: any;
    // You can add other props if needed
}

export default function LinkIconButton(props: IndexProps) {
    const { name, to, muiIcon } = props;

    return (

        <IconButton
            component={NextLinkComposed}
            to={to}
            sx={{ color: 'white', mx: '10px' }}
        >
            {muiIcon}
        </IconButton>
    );
} 
