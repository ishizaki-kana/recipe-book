import { createTheme, PaletteColor, PaletteColorOptions } from '@mui/material';
import { blue, blueGrey, brown, orange, red, teal } from '@mui/material/colors';

declare module '@mui/material/styles' {
    interface Palette {
        ui: PaletteColor;
        red: PaletteColor;
        blue: PaletteColor;
        teal: PaletteColor;
        orange: PaletteColor;
        brown: PaletteColor;
        blueGrey: PaletteColor;
    }

    interface PaletteOptions {
        ui?: PaletteColorOptions;
        red?: PaletteColorOptions;
        blue?: PaletteColorOptions;
        teal?: PaletteColorOptions;
        orange?: PaletteColorOptions;
        brown?: PaletteColorOptions;
        blueGrey?: PaletteColorOptions;
    }
}

declare module '@mui/material/IconButton' {
    interface IconButtonPropsColorOverrides {
        ui: true;
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        ui: true;
    }
}

declare module '@mui/material/CircularProgress' {
    interface CircularProgressPropsColorOverrides {
        ui: true;
    }
}

const theme = createTheme({
    palette: {
        primary: {
            light: '#7a9fa2',
            main: '#59878b',
            dark: '#3e5e61',
            contrastText: '#fff'
        },
        secondary: {
            light: '#eec6cb',
            main: '#eab8bf',
            dark: '#a38085',
            contrastText: '#333'
        },
        ui: {
            light: '#eeeeee',
            main: '#757575',
            dark: '#424242',
            contrastText: '#333'
        },
        red: {
            light: red[100],
            main: red[300]
        },
        blue: {
            light: blue[100],
            main: blue[300]
        },
        teal: {
            light: teal[100],
            main: teal[300]
        },
        orange: {
            light: orange[100],
            main: orange[300]
        },
        brown: {
            light: brown[100],
            main: brown[300]
        },
        blueGrey: {
            light: blueGrey[100],
            main: blueGrey[300]
        }
    }
});

export default theme;