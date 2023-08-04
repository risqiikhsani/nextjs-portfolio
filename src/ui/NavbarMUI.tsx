"use client"
import { NextLinkComposed } from '@/components/buttons/Link';
import { HeaderUrl } from '@/constants/urls';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import LeftDrawer from './LeftDrawer';
import RightDrawer from './RightDrawer';
import { Container } from '@mui/material';
import { app_name } from '@/constants/names';



interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactNode;
}

const drawerWidth = 240;


export default function NavbarMUI(props: Props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const leftDrawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Toolbar>
        <Typography variant="h5">
          {app_name}
        </Typography>
      </Toolbar>
      <Divider />
      <LeftDrawer />
    </Box>
  );

  const rightDrawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Toolbar>
        <IconButton onClick={() => setOpenDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Toolbar>
      <Divider sx={{ mb: '10px' }} />
      <RightDrawer />
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', bgcolor:'antiquewhite' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{backgroundColor:'transparent',boxShadow:'none'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open leftDrawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Button component={NextLinkComposed} to="/" sx={{ color: 'white', display: { xs: 'none', sm: 'block' } }}>
            <Typography variant="h5">
              {app_name}
            </Typography>
          </Button>
          <Box sx={{ flexGrow: 1, }} />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {HeaderUrl.map((item) => (
              <Button component={NextLinkComposed} to={item.url} key={item.name} sx={{ color: '#fff' }}>
                {item.name}
              </Button>
            ))}
          </Box>
          <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            <DarkModeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {leftDrawer}
        </Drawer>
      </Box>

        <Container maxWidth="md" sx={{ p: 3 }}>
          <Toolbar />
          {children}
        </Container>

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {rightDrawer}
      </Drawer>
    </Box>
  );
}