import './item.css';

import React from 'react';

const Item = ({info}) => {
    return(
        <a href="" className='modelos'>
            <img src={info.image} alt="s23" />
            <p>{info.title} </p>
        </a>
    );
}

export default Item;