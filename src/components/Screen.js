import React from 'react';
import Menu from './screens/Menu';
import Games from './screens/Games';
import Settings from './screens/Settings';
import CoverFlow from './screens/CoverFlow';
import PlayMusic from './screens/PlayMusic';


class Screen extends React.Component {
    render(){
        const {showPage, menuClick} = this.props;
        console.log(showPage);
    return (
        <div className="screen-container">
            
            <Menu
                optionsInMenu={this.props.optionsInMenu}
                optionSelected={this.props.optionSelected}
            />

            {showPage === 0 ? <Games/> : '' }
            {showPage === 1 ? <PlayMusic/> : '' }
            {showPage === 2 ? <Settings/> : '' }
            {showPage === 3 ? <CoverFlow/> : '' }
        </div>
    )
    }
}

export default Screen;