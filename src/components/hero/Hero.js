import React from 'react';
import './hero.scss';

export default ({ background, title, subtitle, cta, link, children }) => {
    const heroStyle={
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    return (
        <div class="hero" style={ heroStyle }>
            <h1>{title}</h1>
            <p class="subtitle">{subtitle}</p>
            {link &&
            <a class="cta" href="{link}">{cta}</a>
            }
            {children}
        </div>
    )
};
