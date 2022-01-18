import React from 'react';

import css from "./Layout.module.css";
import {Link, NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    //<Outlet/> shows position of content relative to header>
    return (
        <>
            <div className={css.header}>
                <NavLink to="/users">USERS</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </div>
            <div className={css.layout}>
                <Outlet/>
            </div>
        </>
    );
}

export default Layout;