import React from "react";
import { Outlet, Link } from "react-router-dom";
import Aux from "../hoc/Auxillary";
import './Layout.css'
const Layout = (props) => {
    return (
        <Aux>
            <div className="topnav"><nav>
                <ul className="navMenu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/ExcelFile">Excel</Link>
                    </li> <li>
                        <Link to="/Support">Admin</Link>
                    </li>
                </ul></nav>
            </div>
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
