import React from "react";
import {Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import {UsersPage, PostsPage,
        UserDetailsPage, UserPostsPage,
        PostDetailsPage, PostCommentsPage} from './pages';
import css from './App.module.css'

function App() {
    return (
        <div className={css}>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={'posts'} element={<UserPostsPage />} />
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetailsPage/>}>
                            <Route path={'comments'} element={<PostCommentsPage />}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
