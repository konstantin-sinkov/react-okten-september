import React, {useEffect, useState} from 'react';
import baseURL, {urls} from "../../config/urls";
import ImageBlock from "../../components/ImageBlock/ImageBlock";

const CarPage = () => {
    const [imageURL, setImageURL] = useState(null);
    useEffect(() => {
        setImageURL(`${baseURL}/${urls.car}`);
    }, [imageURL]);
    
    return (
        <div>
            <ImageBlock imageURL={imageURL} />
        </div>
    );
}

export {CarPage};