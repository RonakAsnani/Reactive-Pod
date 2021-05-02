import React from 'react';

import Screen from './components/Screen';
import Keypad from './components/Keypad';
import ZingTouch from 'zingtouch';

class Ipod extends React.Component{
    constructor(){
        super();
        this.state = {
            options: ['Games', 'Music', 'Settings', 'CoverFlow'],
            selected : 0
        }
    }
    componentDidMount(){
        var target = document.getElementsByClassName('keypad')[0];
        var region = new ZingTouch.Region(target);

            region.bind(target, 'rotate', function(e) {
                console.log(e);

        });

    }
    render (){
        return (
            <div className="ipod">
            <Screen
                optionsInMenu={this.state.options}
                optionSelected={this.state.selected}
            />
            <Keypad/>
            </div>
        );
     }
}




export default Ipod;
