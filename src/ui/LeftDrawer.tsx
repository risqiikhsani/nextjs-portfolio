import { NextLinkComposed } from '@/components/buttons/Link';
import { HeaderUrl } from '@/constants/urls';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


export default function LeftDrawer() {
    return (
        <>
            <List>
                {HeaderUrl.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton component={NextLinkComposed} to={item.url} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </>
    )
}