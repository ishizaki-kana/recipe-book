import { createTheme, PaletteColor, PaletteColorOptions } from "@mui/material";

declare module '@mui/material/styles' {
    interface Palette {
        ui: PaletteColor;
    }

    interface PaletteOptions {
        ui?: PaletteColorOptions;
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
        }
    }
});

export default theme;