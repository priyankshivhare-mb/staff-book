import React from 'react'
import {Route, Link} from 'react-router-dom'
import Dashboard from '../dashboard'
import About from '../about'

const App = () => (
    <>
        <nav className="navbar navbar-expand-lg navbar-light nav-mb-theme">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about-us">About</a>
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
)

export default App
