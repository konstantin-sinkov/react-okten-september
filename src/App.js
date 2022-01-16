import React, {useEffect, useState} from "react";

import './App.css';
import Form from "./components/Form/Form";
import Users from "./components/Users/Users";
import {usersService} from "./services/users.service";

function App() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    
    useEffect(() => {
        usersService.getUsers()
            .then(value => {
                setUsers([...value])
                setFilteredUsers([...value])
            });
    });
    
    //filtration function
    const getFilter = (data) => {
        let filteredArr = [...users];
    
        //comparing data from filled form input with each user
        if (data.name) {
            filteredArr = filteredArr.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()));
        }
        if (data.username) {
            filteredArr = filteredArr.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()));
        }
        if (data.email) {
            filteredArr = filteredArr.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()));
        }
        setFilteredUsers(filteredArr);
    }
    
    return (
        <div className="App">
            <Form getFilter={getFilter}/>
            <Users users={filteredUsers}/>
        </div>
    );
}

export default App;
