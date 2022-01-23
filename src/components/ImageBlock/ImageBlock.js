import React, {useEffect, useState} from 'react';

import {UncachedImage} from "react-uncached-image";

const ImageBlock = ({imageURL}) => {
    // debugger;
    // let [newImageURL, setNewImageURL] = useState(imageURL);
    // let [counter, setCounter] = useState(0);
    //
    // useEffect((newImageURL) => {
    //     setNewImageURL(newImageURL.space('').join(''));
    // },[counter]);
    //
    // const updateImage = (counter) => {
    //     setCounter(counter++);
    // }
    
    return (
        <div>
            {/*<button onClick={updateImage}>*/}
            <button>
                Update
            </button>
            <UncachedImage src={imageURL}/>
        </div>
    );
}

export default ImageBlock;