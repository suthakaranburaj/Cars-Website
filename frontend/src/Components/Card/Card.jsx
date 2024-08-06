import React from 'react';
import './Card.css';

const Card = (props) => {
    return (
        <div className='play'>
        <div className='Card'>
            <div className='CardNimg'>
                <img src={props.image}  alt="" />
            </div>
            <div className='textarea'> 
                    <div><p>{props.name}</p></div>
            </div>
           
            
        </div></div>
    );
};

export default Card;
