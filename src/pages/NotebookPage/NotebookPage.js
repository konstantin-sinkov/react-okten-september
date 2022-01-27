import React, {useEffect, useState} from 'react';
import baseURL, {urls} from "../../config/urls";
import ImageBlock from "../../components/ImageBlock/ImageBlock";

const NotebookPage = ({update, trigger}) => {
    const [imageURL, setImageURL] = useState(null);
    useEffect(() => {
        setImageURL(`${baseURL}/${urls.notebook}`);
    }, [trigger]);
    
    return (
        <div>
            <ImageBlock imageURL={imageURL} update={update}/>
        </div>
    );
}

export {NotebookPage};