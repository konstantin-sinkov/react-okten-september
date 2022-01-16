import {urls} from "../configs/urls";

const getUserPosts = (id) => {
    return fetch(`${urls.users}/${id}/posts`)
        .then(value => value.json())
}

export default getUserPosts;