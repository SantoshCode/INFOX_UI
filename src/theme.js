import { createTheme } from '@mui/material/styles'
const bBlue = '#1983CA'
const bWhite = '#F2FFFF'
const bGreen = '#004E61'

export default createTheme({
    props: {
        // Name of the component
        MuiButtonBase: {
            // The properties to apply
            disableRipple: true, // No more ripple, on the whole application!
        },
    },
    palette: {
        common: {
            blue: bBlue,
            white: bWhite,
            green: bGreen,
        },
        primary: {
            main: bBlue,
        },
        secondary: {
            main: bWhite,
        },
    },
    typography: {
        tab: {
            fontFamily: 'Raleway',
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '15px',
            color: '#4e4e4e',
            padding: '8px',
        },
        h2: {
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: '2.5rem',
            color: bBlue,
            // lineHeight: 1.5,
        },
        h1: {
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: '2rem',
            color: '#161e2e',
            // lineHeight: 1.5,
        },
        h4: {
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: '1rem',
            color: '#161e2e',
            // lineHeight: 1.5,
        },
        h3: {
            fontFamily: 'Pacifico',
            // fontWeight: 700,
            fontSize: '2.1rem',
            color: bBlue,
            // lineHeight: 1.5,
        },
        subtitle1: {
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: '1rem',
            color: '#6e6e6e',
            lineHeight: 1.5,
        },
        subtitle2: {
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: '1.4rem',
            color: '#6e6e6e',
            opacity: 0.6,
        },
        h5: {
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: '1rem',
            color: '#111',
            opacity: 0.6,
        },
        h6: {
            fontWeight: 700,
            fontSize: '0.7rem',
            color: '#6e6e6e',
            opacity: 0.6,
        },
    },
})
