import React, {useEffect, useState} from 'react';

import baseURL, {urls} from "../../config/urls";
import ImageBlock from "../../components/ImageBlock/ImageBlock";

const CatPage = () => {
    // const [image, setImage] = useState(null);
    //
    // useEffect(() => {
    //     getImageService.getCat().then(value => setImage[{...image}]);
    // }, [image]);
    // console.log(image);
    const [imageURL, setImageURL] = useState(null);
    useEffect(() => {
        setImageURL(`${baseURL}/${urls.cat}`);
    }, [imageURL]);
    
    return (
        <div>
            <ImageBlock imageURL={imageURL} />
        </div>
    );
}

export {CatPage};