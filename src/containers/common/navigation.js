import React from 'react';
import {Link} from "react-router-dom";

const Navigation = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light nav-mb-theme">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className={`${props.activeLink === 'dashboard' ? 'active' : ''} nav-item`}>
                        <Link className="nav-link" to="/" onClick={() => props.setActiveLink('dashboard')}>Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Setup Checklist</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Staff</Link>
                    </li>
                    { props.isStaffBookEnabled && <li className={`${props.activeLink === 'staffBook' ? 'active' : ''} nav-item`}>
                        <Link className="nav-link" to="/staff-book" onClick={() => props.setActiveLink('staffBook')}>Staff Book</Link>
                    </li> }
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Services & Pricing</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Manager Tools</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;
