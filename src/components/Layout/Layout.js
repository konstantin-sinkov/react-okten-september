import React from 'react';
import css from './Layout.module.css';
import {NavLink, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className={css.wrapper}>
            <div className={css.nav_right}>
                <NavLink to='/cat'>Cat</NavLink>
                <NavLink to='/car'>Car</NavLink>
                <NavLink to='/dog'>Dog</NavLink>
                <NavLink to='/girl'>Girl</NavLink>
                <NavLink to='/note'>Notebook</NavLink>
            </div>
            
            <Outlet />
        </div>
    );
}

export default Layout;