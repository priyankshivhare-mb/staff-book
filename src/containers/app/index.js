import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'

const App = () => (
    <>
        <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Project name</a>
                </div>
                <div id="navbar" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <Link to="/">Home</Link>
                        <Link to="/about-us">About</Link>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container">
            <header>
                <Link to="/">Home</Link>
                <Link to="/about-us">About</Link>
            </header>

            <main>
                <Route exact path="/" component={Home} />
                <Route exact path="/about-us" component={About} />
            </main>
        </div>
    </>
)

export default App
