import React from 'react';


class MenuItems extends React.Component{
    render(){
        const {optionsInMenu, optionSelected} = this.props;
        console.log(optionsInMenu);
        return(
            <React.Fragment>
                {
                    optionsInMenu.map((item,index) => {
                        return (
                            <div className={optionSelected === index ? 'selected' : ''} key={index}>
                                <p>{item}</p>
                            </div>
                        )
                    })
                }
            </React.Fragment>
        )
    }
}

export default MenuItems;