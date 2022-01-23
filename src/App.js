import React from "react";
import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./components/Layout/Layout";
import {CatPage, CarPage, DogPage, GirlPage, NotebookPage} from './pages';


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'cat'} element={<CatPage/>} />
                    <Route path={'car'} element={<CarPage/>} />
                    <Route path={'dog'} element={<DogPage/>} />
                    <Route path={'girl'} element={<GirlPage/>} />
                    <Route path={'note'} element={<NotebookPage/>} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
