import React, {useEffect, useState} from "react";

import './App.css';
import Form from "./components/Form/Form";
import Users from "./components/Users/Users";
import {usersService} from "./services/users.service";

function App() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        usersService.getUsers()
            .then(value => setUsers(value));
    })
    
    
    return (
        <div className="App">
            <Form />
            <Users users={users}/>
        </div>
    );
}

export default App;
