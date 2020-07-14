import React from 'react';
import classnames from 'classnames';
import './card.scss'

export default ({children, elevation}) => {
    if (typeof elevation === undefined) {
        elevation = 1;
    }
    const classNames = classnames('card', 'elevation-' + elevation);
    return (
        <div className={classNames}>{children}</div>
    )
}
