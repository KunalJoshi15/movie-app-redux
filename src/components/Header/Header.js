import React from 'react'
import {Link} from 'react-router-dom'
import './Header.scss'
import user from '../../images/user.png'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">Movie App</div>
            <div className="user-image">
                <img src={user} alt="user-image"/>
            </div>
        </div>
    )
}

export default Header
