import React from 'react';
import './toolbar.css'
const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_logo">
                <a href="/" > THE LOGO </a>
            </div>
            <div className="spacer"/>
            <div className="toolbar_navigation-items" >
              <ul>
                <li><a href="/home">HOME</a></li>
                <li><a href="/PORTFOLIO">PORTFOLIO</a></li>
                <li><a href="/ABOUT">ABOUT</a></li>
                <li><a href="/CONTACT">CONTACT</a></li>
              </ul>
            </div>
        </nav>
    </header>
);

 
export default toolbar;