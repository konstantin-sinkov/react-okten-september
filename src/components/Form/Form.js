import React, {useState} from 'react';

const Form = ({getFilter}) => {
    const [form, setForm] = useState({name: '', username: '', email: ''});
    
    //function creates object with data from form input values
    const formHandler = (e) => {
        const eventData = {...form, [e.target.name]: e.target.value};//dynamically key
        setForm({...form, ...eventData});
        // getFilter(eventData);
    }
    //filtering users array with the state obj.
    const onSubmit = (e) => {
        e.preventDefault();
        getFilter(form);
    }
    
    return (
        <form>
            <label><input placeholder={"name"} type="text" name={"name"} value={form.name} onChange={formHandler}/></label>
            <label><input placeholder={"login"} type="text" name={"username"} value={form.username} onChange={formHandler} /></label>
            <label><input placeholder={"email"} type="text" name={"email"} value={form.email} onChange={formHandler}/></label>
            <button onClick={onSubmit}>Filter</button>
        </form>
    );
}

export default Form;