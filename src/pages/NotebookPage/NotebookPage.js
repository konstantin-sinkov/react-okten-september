import React, {useEffect, useState} from 'react';
import baseURL, {urls} from "../../config/urls";
import ImageBlock from "../../components/ImageBlock/ImageBlock";

const NotebookPage = () => {
    const [imageURL, setImageURL] = useState(null);
    useEffect(() => {
        setImageURL(`${baseURL}/${urls.notebook}`);
    }, [imageURL]);
    
    return (
        <div>
            <ImageBlock imageURL={imageURL} />
        </div>
    );
}

export {NotebookPage};