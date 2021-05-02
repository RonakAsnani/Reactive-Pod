import React from 'react';
import './App.css';
import Screen from './components/Screen';
import Keypad from './components/Keypad';
import $ from 'jquery';
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
            showPage: -1,

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
                       
                        selected: this.temp_selected,
                        showPage: this.temp_selected
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
                        
                        selected: this.temp_selected,
                        showPage: this.temp_selected
                    })
                    
                }
            }
            //console.log(this.state);
        });

    }
    menuButtonClicked = () => {
        console.log('yesss');
        let screen = document.getElementsByClassName('screen-menu')[0].classList;
        if(screen.contains('width-50')){
            $('.screen-menu').removeClass('width-50');
        }else{
            $('.screen-menu').addClass('width-50');
        }
    }
    render (){
        return (
            <div className="ipod">
            <Screen
                optionsInMenu={this.state.options}
                optionSelected={this.state.selected}
                showPage = {this.state.showPage}
                menuClick = {this.menuButtonClicked}
            />
            <Keypad
                menuClick = {this.menuButtonClicked}
            />
            </div>
        );
     }
}




export default Ipod;
