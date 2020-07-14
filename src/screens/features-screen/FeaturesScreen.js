import React from 'react';
import Feature from '../../components/feature/Feature';
import Screen from '../../components/screen/Screen';
import './features-screen.scss';

export default () => {
    return (
        <Screen theme={'primary'} flex={'row'} id="features">
            <section className={'feature-wrapper'}>
                <Feature
                    image="https://picsum.photos/320/240"
                    title="Cardiff Fin Co"
                    description="Stand up paddle fins"
                    cta="Buy Now"
                    link="https://shopify..."></Feature>
            </section>
            <section className={'feature-wrapper'}>
                <Feature
                    image="https://picsum.photos/320/240"
                    title="Cardiff Fin Co"
                    description="Stand up paddle fins"
                    cta="Buy Now"
                    link="https://shopify..."></Feature>
            </section>
            <section className={'feature-wrapper'}>
                <Feature
                    image="https://picsum.photos/320/240"
                    title="Cardiff Fin Co"
                    description="Stand up paddle fins"
                    cta="Buy Now"
                    link="https://shopify..."></Feature>
            </section>
        </Screen>
    )
}
