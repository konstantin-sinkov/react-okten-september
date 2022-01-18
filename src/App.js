import React from "react";

import css from './App.module.css';
import {Link, Route, Routes} from "react-router-dom";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import Layout from "./components/Layout/Layout";
import UserDetailsPage from "./pages/UserDetailsPage/UserDetailsPage";
import PostDetailsPage from "./pages/PostDetailsPage/PostDetailsPage";

function App() {
    return (
        <>
            
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>} />
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetailsPage/>} />
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
