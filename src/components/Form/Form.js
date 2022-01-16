import React, {useState} from 'react';

const Form = ({getFilter}) => {
    const [form, setForm] = useState({name: '', username: '', email: ''});
    
    //function creates object with data from form input values
    const formHandler = (e) => {
        const eventData = {...form, [e.target.name]: e.target.value};//dynamically key
        setForm({...form, ...eventData});
        getFilter(eventData);
    }
    
    return (
        <div>
            <label><input type="text" name={"name"} value={form.name} onChange={formHandler}/></label>
            <label><input type="text" name={"username"} value={form.username} onChange={formHandler} /></label>
            <label><input type="text" name={"email"} value={form.email} onChange={formHandler}/></label>
        </div>
    );
}

export default Form;