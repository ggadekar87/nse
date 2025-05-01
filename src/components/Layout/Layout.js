import React from "react";
import Aux from "../hoc/Auxillary";
import './Layout.css'
import MenuBar from "../MenuBar/MenuBar";
const Layout = (props) => {
    return (
        <Aux>
            <MenuBar></MenuBar>
            <div className="row">
                <div className="column">
                    <main>{props.children}</main>
                </div>
            </div>
            <div className="footer">
                <h2>Footer</h2>
            </div>
        </Aux>
    );
};

export default Layout;
