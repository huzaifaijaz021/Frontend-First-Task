import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Navbar = () => {
    const allusers = useSelector((state) => state.app.users);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid ">
                    <h4 className="navbar-brand">User Information</h4>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link">All Users ({allusers.length})</Link>
                            </li>
                        </ul>
                        <ul>
                            <li className="nav-item hero">
                                <Link to='/create' className="nav-link">Create New User</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;