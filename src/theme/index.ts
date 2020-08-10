import { createMuiTheme } from '@material-ui/core/styles';
export const lightTheme = createMuiTheme({
    palette: {
        type: 'light',
    },
    typography: {
        fontFamily: 'neuehanskendrick, Arial',
    },
    overrides: {
        MuiGrid: {
            container: {
                width: '95%',
                margin: '3% auto'
            },
            item: {
                padding: '5px 5px 5px 0px'
            }

        },
        MuiAvatar: {
            root: {
                width: '80px',
                height: '80px',
                color: 'green'
            },

        },
    },
});