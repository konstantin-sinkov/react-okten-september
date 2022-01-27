import React, {useEffect, useState} from 'react';
import baseURL, {urls} from "../../config/urls";
import ImageBlock from "../../components/ImageBlock/ImageBlock";

const GirlPage = ({update, trigger}) => {
    const [imageURL, setImageURL] = useState(null);
    useEffect(() => {
        setImageURL(`${baseURL}/${urls.girl}`);
    }, [trigger]);
    
    return (
        <div>
            <ImageBlock imageURL={imageURL} update={update}/>
        </div>
    );
}

export {GirlPage};