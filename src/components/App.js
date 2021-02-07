import {Button, ThemeProvider, Typography} from "@material-ui/core";
import HAppBar from "./HAppBar";
import Layout from "./Layout";
import React from "react";
import theme from "./Theme";

function App() {
    const msg = [...new Array(500)].map(() => 'asdfsdafsdafsdf').join('\n')
    console.log(msg)
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Typography variant={"body1"}>
                    {msg}
                </Typography>
            </Layout>
        </ThemeProvider>
    );
}

export default App;
