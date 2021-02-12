import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import {makeStyles, Tab, Tabs} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    tabContainer: {
        marginLeft: "auto",
    },
    singleTab: {
        ...theme.typography.tab,
        minWidth: '6rem',
        marginLeft: '20px',
    }
}))

function HideOnScroll(props) {
    const {children, window} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({target: window ? window() : undefined});

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function HAppBar(props) {
    const [activeTabValue, setActiveTabValue] = useState(0)
    const classes = useStyles()

    const tabsOnChangeHandler = (e, value) => {
        console.log(e, value)
        setActiveTabValue(value)
    }

    return (
        <React.Fragment>
            <CssBaseline/>
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6">Would You Rather</Typography>
                        <Tabs className={classes.tabContainer} value={activeTabValue} onChange={tabsOnChangeHandler}>
                            <Tab label={'Home'} className={classes.singleTab}/>
                            <Tab label={'New'} className={classes.singleTab}/>
                            <Tab label={'All Questions'} className={classes.singleTab}/>
                            <Tab label={'Answered'} className={classes.singleTab}/>
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar/>
        </React.Fragment>
    );
}