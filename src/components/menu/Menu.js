import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import './menu.scss';

export default ({items}) => {
    const [visible, setVisibility] = useState(false);
    return (
        <div className={"menu " + (visible ? "expanded" : "minimized")}>
            <button onClick={() => setVisibility(true)}>
                <FaBars/>
            </button>
            <nav>

                <button onClick={() => setVisibility(false)}>
                    <FaTimes/>
                </button>
                <div className={"menu-items"}>
                    {items.map(item => <MenuItem {...item}></MenuItem>)}
                </div>
            </nav>
        </div>
    )
};

const MenuItem = ({label, id}) => {
    return <a className={"menu-item"} href={"#" + id}>{label}</a>
}
