"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import Header from "./Header";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  children?: React.ReactNode;
}

export default function NavbarMUI(props: Props) {

  const { children } = props;


  return (
    <Box sx={{ display: "flex" }}>

      <CssBaseline />
      <AppBar
        position="fixed"
      >
        <Toolbar>
          <Header />
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
