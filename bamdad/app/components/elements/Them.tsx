import React, { ReactNode } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Switch } from '@mui/material'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface Palette {
    neutral: Palette['primary'];
  }

  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

  interface PaletteColor {
    darker?: string;
  }

  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

interface ThemProps {
    children:React.ReactNode
}
 
export default function Them(props:ThemProps) {
    const {children}=props
    const theme = createTheme({
        status: {
          danger: 'var(--orang)',
        },
        palette: {
          primary: {
            main: '#55D4EB',
            darker: '#053e85',
          },
          info: {
            main: '#55D4EB',
            darker: '#053e85',
          },
          neutral: {
            main: '#64748B',
            contrastText: '#fff',
          },
        },
      });
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}
