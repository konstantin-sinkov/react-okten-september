import React, {useState} from "react";

import './App.css';
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";

function App() {
    const [trigger, setTrigger] = useState(null); //for updating cars list
    
    const update = (data) => {
        setTrigger(data)
    }
    
    return (
        <div className="App">
            <Form update={update}/>
            <Cars trigger={trigger}/>
        </div>
    );
}

export default App;
