import React from 'react';
import Card from '../card/Card';
import './feature.scss';

export default ({ image, title, description, cta, link }) => {

    return (
        <div className="feature">
            <Card elevation={2}>
                <div className="image-wrapper">
                    <img src={image}></img>
                </div>
                <h2>{title}</h2>
                <div className="content">
                    <p className="description">{description}</p>
                    {link &&
                    <a className="cta" href="{link}">{cta}</a>
                    }
                </div>
            </Card>
        </div>
    )
};
