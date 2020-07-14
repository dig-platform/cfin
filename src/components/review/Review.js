import React from 'react';
import {FaStar, FaUser}  from 'react-icons/fa';
import './review.scss';

export default ({avatar, rating, text}) => {
    return (
        <div className={"review"}>
            <div className={'avatar'}>
                <FaUser/>
            </div>
            <div className={"body"}>
                <p>{text}</p>
                <div className={'rating'}>
                    {[...Array(rating)].map(star => <FaStar/>)}
                </div>
            </div>
        </div>
    )
}
