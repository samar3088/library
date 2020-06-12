import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, NavLink } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Book from './pages/Book';
import Student from './pages/Student';
import User from './pages/User';

export default class Navbar extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink activeStyle={{ color: "red" }} exact to="/book" className="nav-link" href="#">Book</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeStyle={{ color: "red" }} exact to="/dashboard" className="nav-link" href="#">Dashboard</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeStyle={{ color: "red" }} exact to="/student" className="nav-link" href="#">Student</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeStyle={{ color: "red" }} exact to="/user"  className="nav-link" href="#">User</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <Route exact path='/book' Component={Book} />
                    <Route exact path='/dashboard' Component={Dashboard} />
                    <Route exact path='/student' Component={Student} />
                    <Route exact path='/user' Component={User} />

                </div>

                

            </Router>
        );
    }
}

