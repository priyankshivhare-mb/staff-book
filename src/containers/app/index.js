import React from 'react'
import { Route, Link } from 'react-router-dom'
import Dashboard from '../dashboard'
import About from '../about'

const App = () => (
    <>
        <div className="container">
            <header>
                <Link to="/">Home</Link>
                <Link to="/about-us">About</Link>
            </header>

            <main>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/about-us" component={About} />
            </main>
        </div>
    </>
)

export default App
