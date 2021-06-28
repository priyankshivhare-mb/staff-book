import React, { useState } from 'react'
import {Route, Link} from 'react-router-dom'
import Cookies from 'universal-cookie';
import Dashboard from '../dashboard'
import StaffBook from '../staff-book'

const App = () => {
    const [ activeLink, setActiveLink ] = useState('dashboard');

    const cookies = new Cookies();
    const isStaffBookEnabled = cookies && cookies.get('isStaffBookEnabled');

    return (
    <>
        <div className="spacer-nav">
            { /* Probably something will come here */ }
        </div>
        <nav className="navbar navbar-expand-lg navbar-light nav-mb-theme">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className={`${activeLink === 'dashboard' ? 'active' : ''} nav-item`}>
                        <Link className="nav-link" to="/" onClick={() => setActiveLink('dashboard')}>Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Setup Checklist</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Staff</Link>
                    </li>
                    { isStaffBookEnabled && <li className={`${activeLink === 'staffBook' ? 'active' : ''} nav-item`}>
                        <Link className="nav-link" to="/staff-book" onClick={() => setActiveLink('staffBook')}>Staff Book</Link>
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
        <div className="container">
            <main>
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/staff-book" component={StaffBook}/>
            </main>
        </div>
    </>
)};

export default App
