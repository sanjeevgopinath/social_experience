import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return(
            <div className="Header">        
                <nav className="navbar fixed-top  navbar-expand-xl navbar-dark">
                <Link to={`/`}><span className="navbar-brand">SE Symposium FY19</span></Link>
                <ul className="navbar-nav scroll ml-auto">
                    <li className="nav-item">
                        <Link to={`/profileInfo`} style={{color: 'white'}}><span className="material-icons">account_circle</span></Link>
                    </li>
                </ul>
                </nav>
            </div>
        );
    }
}

export default Header
