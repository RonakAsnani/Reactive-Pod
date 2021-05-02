import React from 'react';
import Menu from './screens/Menu';

class Screen extends React.Component {
    render(){
    return (
        <div className="screen-container">
            <Menu
                optionsInMenu={this.props.optionsInMenu}
                optionSelected={this.props.optionSelected}
            />
        </div>
    )
    }
}

export default Screen;