import React, {useEffect, useState} from 'react';
import baseURL, {urls} from "../../config/urls";
import ImageBlock from "../../components/ImageBlock/ImageBlock";

const CarPage = ({update, trigger}) => {
    const [imageURL, setImageURL] = useState(null);
    
    useEffect(() => {
        setImageURL(`${baseURL}/${urls.car}`);
    }, [trigger]);
    
    return (
        <div>
            <ImageBlock imageURL={imageURL} update={update}/>
        </div>
    );
}

export {CarPage};