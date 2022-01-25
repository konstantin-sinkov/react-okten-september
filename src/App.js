import React, {useState} from "react";

import './App.css';
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";

function App() {
    const [trigger, setTrigger] = useState(null); //for updating cars list
    
    //Car update
    const [carForUpdate, setCarForUpdate] = useState({});
    
    const update = (data) => {
        setTrigger(data)
    }
    
    return (
        <div className="App">
            <Form update={update} carForUpdate={carForUpdate}/>
            <Cars trigger={trigger} update={setTrigger} setCarForUpdate={setCarForUpdate}/> {/*f-n update - nadlyshkova,
             'cause just pass data to setTrigger and we can simply transfer setTrigger to Cars */}
        </div>
    );
}

export default App;
