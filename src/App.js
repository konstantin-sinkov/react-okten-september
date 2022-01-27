import React, {useState} from "react";
import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./components/Layout/Layout";
import {CatPage, CarPage, DogPage, GirlPage, NotebookPage} from './pages';


function App() {
    const [trigger, setTrigger] = useState(null);
    
    const update = (data) => {
        debugger;
        setTrigger(data);
    }
    
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'cat'} element={<CatPage trigger={trigger} update={update}/>} />
                    <Route path={'car'} element={<CarPage trigger={trigger} update={update}/>} />
                    <Route path={'dog'} element={<DogPage trigger={trigger} update={update}/>} />
                    <Route path={'girl'} element={<GirlPage trigger={trigger} update={update}/>} />
                    <Route path={'note'} element={<NotebookPage trigger={trigger} update={update}/>} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
