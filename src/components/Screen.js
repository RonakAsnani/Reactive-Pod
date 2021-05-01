import React from 'react';

const Screen = (props) => {
    return (
    <div style={styles.screen}>
        <img style={styles.img} src="https://www.lifewire.com/thmb/3ptPVyTx5aiQVaBb1joO1z8hDiE=/1024x698/filters:fill(auto,1)/ipod-nano-6-57e1deee5f9b58651667c02d.jpg" alt="screen"/>
    </div>
    )
}

const styles = {
    screen:{
        width: '260px',
        height:'200px',
        background: '#2e2e2e',
        margin: '20px auto',
        border: '4px solid #555555',
        borderRadius: '5px',
    },
    img:{
        width: '260px',
        height: '100%'
    }
}

export default Screen;