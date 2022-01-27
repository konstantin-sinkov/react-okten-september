import React, {useReducer} from "react";

import CounterItem from "./components/CounterItem/CounterItem";
import reducer from "./reducers/counterItem.reducer";
import './App.css';


function App() {
    const [state, dispatch] = useReducer(reducer, {counter1: 0, counter2: 0, counter3: 0});
    
    return (
        <div className="App">
            <CounterItem counterValue={state.counter1} dispatch={dispatch} id={1}/>
            <CounterItem counterValue={state.counter2} dispatch={dispatch} id={2}/>
            <CounterItem counterValue={state.counter3} dispatch={dispatch} id={3}/>
        </div>
    );
}

export default App;
