import React from 'react';
import {useContext} from 'react';
import {Context} from "../../index";

import './style.css';

const Navbar = () => {
    const {UserStore} = useContext(Context);
    console.log(UserStore);
    return (
        <div>
            <nav className="HeaderBar">
                {UserStore.isAuth ? (
                    <div className="dropdown">
                        <button className="dropbtn"></button>
                        <div className="dropdown-content">
                            <a href="#" id="link">Profile</a><a href="#" id="link">Logout</a>
                            <a href="#" id="link">Help</a>
                        </div>
                    </div>
                ) : (
                    <div>

                    </div>
                )
                }
            </nav>
        </div>
    );
};

export default Navbar;