import React from 'react';

import css from "./Layout.module.css";
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    //<Outlet/> shows position of content relative to header>
    return (
        <>
            <div className={css.header}>
                <Link to="/users">USERS</Link>
                <Link to="/posts">Posts</Link>
            </div>
            <Outlet/>
        </>
    );
}

export default Layout;