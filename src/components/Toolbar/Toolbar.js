import React from 'react';
import './Toolbar.css'

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div></div>
            <div className="toolbar_logo"><a href="/">The Logo</a></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/"></a>Products</li>
                    <li><a href="/"></a>Users</li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;