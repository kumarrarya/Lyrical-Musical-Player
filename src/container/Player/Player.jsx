import React from "react";

import './Player.css';

const Player = (props) => {
    return (
        <div className="app-player flex">
            <img className="cover-img" src={props.cover} alt="song-cover" />
            <h1>{props.name}</h1>
            <h4>{props.artist}</h4>
        </div>
    );
}

export default Player;