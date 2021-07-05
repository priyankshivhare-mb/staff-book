import React from 'react';
import {Link} from "react-router-dom";

const Navigation = (props) => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <ul className="nav nav-pills">
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
            </header>
        </div>
    );
};

export default Navigation;
