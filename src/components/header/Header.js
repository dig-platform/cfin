import React from 'react';
import {FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaBars} from 'react-icons/fa';
import './header.scss';
import Menu from '../menu/Menu';


export default () => {
    const menuItems = [
        {
            id: 'features',
            label: 'Featured Products'
        },
        {
            id: 'about',
            label: 'About Us'
        },
        {
            id: 'contact',
            label: 'Get In Touch'
        }
    ]
    return (
        <header className="header">
            <Menu items={menuItems}></Menu>
            <div className={"title"}>
                <a className="brand" href="#">Cardiff Fin <small>co</small></a>
            </div>
            <div className={"connect"}>
                <button>
                    <FaFacebook/>
                </button>
                <button>
                    <FaTwitter/>
                </button>
                <button>
                    <FaInstagram/>
                </button>
                <button>
                    <FaEnvelope/>
                </button>
            </div>
        </header>
    )
}
