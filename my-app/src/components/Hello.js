import React from 'react';

class Hello extends React.Component{
    render(){
        return(
            <>
            <div>Hello name{this.props.name}</div>
            </>
        )
    }
}

export default Hello;