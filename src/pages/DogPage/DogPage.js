import React, {useEffect, useState} from 'react';
import baseURL, {urls} from "../../config/urls";
import ImageBlock from "../../components/ImageBlock/ImageBlock";

const DogPage = ({update, trigger}) => {
    const [imageURL, setImageURL] = useState(null);
    useEffect(() => {
        setImageURL(`${baseURL}/${urls.dog}`);
    }, [trigger]);
    
    return (
        <div>
            <ImageBlock imageURL={imageURL} update={update}/>
        </div>
    );
}

export {DogPage};