import React from 'react';

const Keypad = (props) => {
    return (
        <div className="keypad">
            <button className="center-circle" onClick={props.selectButtonClicked}>
                Select
            </button>
            <button className="menu-button">
        <i className="fas fa-bars"></i>
            </button>
            <button className="left-button">
                <i className="fas fa-backward"></i>
            </button>
            <button className="right-button">
                <i className="fas fa-forward"></i>
            </button>
            <button className="play-pause">
                <i className="fas fa-play"></i>/<i className="fas fa-pause"></i>
            </button>
        </div>
    )
}

export default Keypad;