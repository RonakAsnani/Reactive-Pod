import React from 'react';
import MenuItems from './MenuItems';
import $ from 'jquery';


class PlayMusic extends React.Component{
    // componentDidMount(){
    //     $('.screen-menu').addClass('width-50');
    // }
    render(){
        const {musicOptions} = this.props;
        return(
            <div className="screen-music">
                <MenuItems optionsInMenu={musicOptions}
                    optionSelected={this.props.optionSelected}
                />
            </div>
        )
    }
}

export default PlayMusic;