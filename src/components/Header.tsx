import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <h1 className="header-logo">Random Teams</h1>
                    <div className="header-menu">
                        <NavLink to={"/random-player"}>players</NavLink>
                        <NavLink to={"/random-club"}>club teams</NavLink>
                        <NavLink to={"/random-country"}>country teams</NavLink>
                        <NavLink to={"/random-teams"}>teams</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;