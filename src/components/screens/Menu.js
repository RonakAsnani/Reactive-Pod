import React from 'react';
import MenuItems from './MenuItems';

class Menu extends React.Component{
    render(){
        const {optionSelected} = this.props;
        console.log(optionSelected);
        return(
            <div className="screen-menu width-50">
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