'use client';

import * as React from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export default function ThemeRegistryMaterialUI({ children }: { children: React.ReactNode }) {
  const darkTheme = useAppSelector((state) => state.theme.darkTheme)
  const dispatch = useAppDispatch()

  let theme = createTheme({
    palette: {
      mode: darkTheme ? "dark" : "light",
    },
    components: {
      // Name of the component ⚛️
      MuiButtonBase: {
        defaultProps: {
          // The default props to change
          disableRipple: true, // No more ripple, on the whole application 💣!
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.severity === 'info' && {
              backgroundColor: '#60a5fa',
            }),
          }),
        },
      },
    },
  });

  theme = responsiveFontSizes(theme);


  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {/* for tailwind dark mode */}
        <div className={`${darkTheme ? "dark" : "light"}`}> 
        {children}
        </div>
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}