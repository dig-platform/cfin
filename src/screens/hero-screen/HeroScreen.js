import React from 'react';
import Hero from '../../components/hero/Hero';
import './hero-screen.scss';

export default () => {
    return (
        <div id="hero">
            <Hero
                background="https://picsum.photos/800/1200"
                title="Cardiff Fin Co"
                subtitle="Stand up paddle fins"
                cta="Shop Now"
                link="https://shopify..."></Hero>
        </div>
    )
}
