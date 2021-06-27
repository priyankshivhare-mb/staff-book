import React, { useState } from 'react'
import {Route, Link} from 'react-router-dom'
import Dashboard from '../dashboard'
import About from '../about'

const App = () => {
    const [ activeLink, setActiveLink ] = useState('dashboard');

    return (
    <>
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
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Services & Pricing</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Manager Tool</Link>
                    </li>
                    <li className={`${activeLink === 'aboutUs' ? 'active' : ''} nav-item`}>
                        <Link className="nav-link" to="/about-us" onClick={() => setActiveLink('aboutUs')}>About us</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="container">
            <main>
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/about-us" component={About}/>
            </main>
        </div>
    </>
)}

export default App
