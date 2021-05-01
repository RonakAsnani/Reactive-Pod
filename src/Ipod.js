import React from 'react';

import Screen from './components/Screen';
import Keypad from './components/Keypad';

class Ipod extends React.Component{

    render (){
        return (
            <div style={styles.backCover} className="ipod">
                <div style={styles.main}>
            <Screen/>
            <Keypad/>
            </div>
            </div>
        );
     }
}

const styles = {
    backCover:{
        width: '300px',
        height: '500px',
        background: '#cccccc',
        margin:' 40px auto',
        borderRadius: '30px',
        boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.4)'
    },
    main:{
        width: '300px',
        height: '500px',
        background: '#f0f0f0',
        margin: 'auto',
        overflow: 'hidden',
        borderRadius: '30px',
        position: 'relative',
        top:"-8px",
        left: '8px'
    }

}


export default Ipod;
