import React, {Children} from "react";
import HAppBar from "./HAppBar";

function Layout(props) {
    return <React.Fragment>
        <HAppBar/>
        {props.children}
    </React.Fragment>
}

export default Layout