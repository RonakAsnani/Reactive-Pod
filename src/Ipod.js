import React from 'react';
import './App.css';
import Screen from './components/Screen';
import Keypad from './components/Keypad';
import ZingTouch from 'zingtouch';

class Ipod extends React.Component{
    constructor(){
        super();
        this.temp_change_in_angle = 0;
        this.temp_selected = 0;
        this.state = {
            options: ['Games', 'Music', 'Settings', 'CoverFlow'],
            selected : 0,
            chengeInAngle: 0,
        
        }
    }
    componentDidMount(){
        var target = document.getElementsByClassName('keypad')[0];
        var region = new ZingTouch.Region(target);

        region.bind(target, 'rotate', (e) => {
            if(document.getElementsByClassName('screen-menu')[0].classList.contains('width-50'))//this rotating facility will only be available when the side bar is shown to the user.
            {
               
                let dist = e.detail.distanceFromLast;
                //console.log(dist);
                this.temp_change_in_angle += dist;
                
                if(this.temp_change_in_angle > 60){
                    this.temp_selected++;
                    this.temp_selected = this.temp_selected%this.state.options.length;
                    
                    this.setState({
                       
                        selected: this.temp_selected
                    })
                    this.temp_change_in_angle = 0;
                }else if(this.temp_change_in_angle < -60){
                    this.temp_selected--;
                    if (this.temp_selected === -1)
                        this.temp_selected = this.state.options.length - 1;
                    this.temp_selected = this.temp_selected%this.state.options.length;
                    //console.log(this.temp_selected);
                    this.temp_change_in_angle = 0;
                    this.setState({
                        
                        selected: this.temp_selected
                    })
                    
                }
            }
            //console.log(this.state);
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
