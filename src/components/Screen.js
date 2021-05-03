import React from 'react';
import Menu from './screens/Menu';
import Games from './screens/Games';
import Settings from './screens/Settings';
import CoverFlow from './screens/CoverFlow';
import PlayMusic from './screens/PlayMusic';
import Artists from './screens/Artists';
import Albums from './screens/Albums';
import AllSongs from './screens/AllSongs';
import $ from 'jquery';


class Screen extends React.Component {
   
     render(){
        const {showPage,optionsInMenu} = this.props;
        console.log(showPage);
        
    return (
        <div className="screen-container">
            
            <Menu
                optionsInMenu={this.props.optionsInMenu}
                optionSelected={this.props.optionSelected}
            />

            {showPage === 0 && optionsInMenu.length ===4 ? <Games /> : '' }
            {/* {showPage === 1  ? <PlayMusic musicOptions={this.props.musicOptions} optionSelected={this.props.optionSelected}/> : ''} */}
            {showPage === 2 && optionsInMenu.length ===4 ? <Settings/> : ''}
            {showPage === 3 && optionsInMenu.length ===4 ? <CoverFlow/> : '' }

            {showPage === 0 && optionsInMenu.length ===3 ? <AllSongs
                songIndex = {this.props.songIndex}
                currentMusic = {this.props.currentMusic}
                currentlyPlayScreen = {this.props.currentlyPlayScreen}
            /> : ''}
            {showPage === 1 && optionsInMenu.length ===3 ? <Artists/> : ''}
            {showPage === 2 && optionsInMenu.length ===3 ? <Albums/> : '' }

        </div>
    )
    }
}

export default Screen;