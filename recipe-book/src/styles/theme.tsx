import { createTheme } from "@mui/material";

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
            contrastText: '#000'
        }
    }
});

export default theme;