import './App.css';
import {useState, useEffect} from 'react';

import Users from './components/Users/Users';
import Posts from './components/Posts/Posts';
import Comments from './components/Comments/Comments';

function App() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    }, []);
    // console.log(users);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComments(value))
    }, []);

    return (
        <div className="wrapper">
            <Users users={users}/>
            <Posts posts={posts}/>
            <Comments comments={comments}/>
        </div>
    );
}

export default App;
