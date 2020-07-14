import React from 'react';
import classnames from 'classnames';
import './screen.scss';

export default ({children, theme, flex}) => {
    return (
        <section className={classnames('screen', theme, flex)}>
            <div className={'screen-content'}>
                {children}
            </div>
        </section>
    )
}
