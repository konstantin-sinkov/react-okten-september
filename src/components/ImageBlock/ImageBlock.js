import React from 'react';
import {UncachedImage} from "react-uncached-image";

import css from './ImageBlock.module.css';

const ImageBlock = ({imageURL, update}) => {
    // debugger;
    
    return (
        <div className={css.image_wrap}>
            <UncachedImage src={imageURL}/>
            <button onClick={update}>
                Update
            </button>
        </div>
    );
}

export default ImageBlock;