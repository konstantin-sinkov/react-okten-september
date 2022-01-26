import React, {useEffect, useState} from 'react';

import {UncachedImage} from "react-uncached-image";

const ImageBlock = ({imageURL}) => {
    // debugger;
    const updateImage = () => {
    
    }
    
    return (
        <div>
            <button onClick={updateImage}>
                Update
            </button>
            <UncachedImage src={imageURL}/>
        </div>
    );
}

export default ImageBlock;