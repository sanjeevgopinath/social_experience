import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return(
            <div class="Header">        
                <nav class="navbar fixed-top  navbar-expand-xl navbar-dark bg-dark">
                <Link to={`/`}><span class="navbar-brand">SE Symposium FY19</span></Link>
                <ul class="navbar-nav scroll ml-auto">
                    <li class="nav-item">
                        <Link to={`/profileInfo`} style={{color: 'white'}}><span class="material-icons">account_circle</span></Link>
                    </li>
                </ul>
                </nav>
            </div>
        );
    }
}

export default Header