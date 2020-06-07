import React from "react";
import Home from "./Home.js"
import About from "./About";
import Books from "./Books";
import Contact from "./Contact";
import Experiences from "./Experiences";
import Sermons from "./Sermons";
import Victories from "./Victories";
import Videos from "./Videos";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Nav() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg mb-5 shadow sticky-top">
                    <Link className='navbar-brand' to='/'>Unhidden Truths</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className='nav-link' to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/experiences">Experiences</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/victories">Victories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/books">Books</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/sermons">Sermons</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/videos">Videos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path='/experiences'>
                        <Experiences/>
                    </Route>
                    <Route path='/books'>
                        <Books/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}