import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    const token = localStorage.getItem('token')

    const logout = () => {
        localStorage.removeItem('token')
        props.history.push('/')
    }

    console.log("props", props)
    if (!token) {
    return ( 
        <div className="newNav">
            <nav>
                <div className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/auth">Sign Up</Link>
            <Link to="/funstuff">Fun Stuff</Link>
            </div>
            </nav>
        </div>
     )
    } else {
        return (
            <div className="newNav">
            <nav>
                <div className="nav-bar">
            <Link to="/">Home</Link>
            {/* <Link to="/auth">Sign Up</Link> */}
            <Link to="/funstuff">Fun Stuff</Link>
            <button onClick={logout}>Logout</button>
            </div>
            </nav>
        </div>
        )
    } 

    // comment
}
 
export default NavBar;