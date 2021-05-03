import React from 'react';
import MenuItems from './MenuItems';
import Menu from './Menu';
import $ from 'jquery';


class PlayMusic extends React.Component{
    // componentDidMount(){
    //     $('.screen-menu').addClass('width-50');
    // }
    render(){
        const {musicOptions} = this.props;
        return(
            <div className="screen-music">
                {/* <Menu optionsInMenu={musicOptions}
                    optionSelected={this.props.optionSelected}
                /> */}
            </div>
        )
    }
}

export default PlayMusic;