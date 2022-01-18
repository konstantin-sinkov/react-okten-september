import React from "react";

import css from './App.module.css';
import {Link, Route, Routes} from "react-router-dom";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import Layout from "./components/Layout";

function App() {
    return (
        <>
            
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/users'} element={<UsersPage/>}/>
                    <Route path={'/posts'} element={<PostsPage/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
