import React from 'react'
import {NavLink} from 'react-router-dom'

function Header() {
    return (
        <div style={{marginBottom: "70px"}}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <NavLink className="navbar-brand ml-3" to="/">Library Management System <span>📚</span></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signin">Sign In</NavLink>
                        </li>
                        <li className="nav-item dropleft">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                More</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <NavLink className="dropdown-item" to="/aboutus">About Us</NavLink>
                                <a className="dropdown-item" href="#">Another action</a>
                                <hr />
                                <NavLink className="dropdown-item" to="/todo">ToDo List</NavLink>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
