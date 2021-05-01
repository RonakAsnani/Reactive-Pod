

import React from 'react';

const Keypad = (props) => {


    return (
        
        <div style={styles.mavigator} className="keypad">
            <div  style={styles.keys}>
                <span style={styles.menu}>Menu</span>
                <img style={styles.fwd} class="fwd" src="https://cdn4.iconfinder.com/data/icons/essential-app-2/16/forward-play-fast-move-256.png"/>
            
            <img style={styles.bkd} class="bkd" src="https://cdn4.iconfinder.com/data/icons/essential-app-2/16/backward-back-behind-before-256.png"/>
            
            <img style={styles.pause} class="play-pause" src="https://cdn4.iconfinder.com/data/icons/essential-app-2/16/play-pause-music-player-256.png"/>

            <div id="rotatable" i style={styles.play}>

            </div>
            </div>
            <div d="interaction" ></div>
        </div>
    )
}

const styles = {
    mavigator:{
        width: '260px',
        height: 230,
        margin: 'auto',
        overflow: 'hidden',
        position: 'relative'
    },
    keys:{
        width: 210,
        height: 210,
        background: 'white',
        margin: '10px auto',
        overflow: 'hidden',
        borderRadius: '100%',
        boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.2)',

    },
    menu:{
        display: 'block',
        position: 'absolute',
        top: '32px',
        left: '107px',
        fontSize: '16px',
        color:' gray',
        cursor: 'pointer'
    },
    fwd:{
        width: 22,
        position: 'absolute',
        top: 108,
        left:195,
        cursor: 'pointer'
    },
    bkd:{
        width:'22px',
        position: 'absolute',
        top :'108px',
        left:' 41px',
        cursor: 'pointer'
    },
    pause:{
        width: 28,
        position: 'absolute',
        top: 182,
        left :120,
        cursor: 'pointer'
    },
    play:{
        width: 100,
        height: 100,
        background: '#f0f0f0',
        margin: '54px auto',
        borderRadius: '100%',
        boxShadow: 'inset 0px -2px 14px -1px rgba(0,0,0,0.3)',
        cursor: 'pointer'

    }

}

export default Keypad;