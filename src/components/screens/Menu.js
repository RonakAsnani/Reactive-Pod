import React from 'react';
import MenuItems from './MenuItems';

class Menu extends React.Component{
    render(){
        const {optionSelected} = this.props;
        return(
            <div className="screen-menu">
                <div className="app-logo">
                    <h3><i>REACTIVE POD</i></h3>
                </div>
                <MenuItems 
                    optionsInMenu={this.props.optionsInMenu}
                    optionSelected={optionSelected}
                />
            </div>
        )
    }
}

export default Menu;