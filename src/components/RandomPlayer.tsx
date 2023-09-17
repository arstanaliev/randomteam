import React from 'react';
import {NavLink} from "react-router-dom";

const RandomPlayer = () => {
    const random1 = Math.round(Math.random() * 2 + 1)
    const random2 = Math.round(Math.random() * 2 + 1)
    return (
        <div className="player">
            <div className="player-numbers">
                <h1>{random1 !== random2 ? random1 : "дагы"}</h1>
                <h1>VS</h1>
                <h1>{random2 !== random1 ? random2 : "бас"}</h1>
            </div>
            <a href="">VS</a>
        </div>
    );
};

export default RandomPlayer;