import {createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import {pink} from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: pink,
    },
    typography: {
        fontFamily: 'Roboto',
        tab: {
            color:'#fff',
            fontSize: '1.3rem',
            fontWeight: '400',
            textTransform: "none",
        }
    },
});
export default theme