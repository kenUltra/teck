import React from 'react';
import './Home.css';

class Home extends React.Component{
    render(){
        return(
            <div className={"back-home " + this.props.backHome} onClick={this.props.home} />
        )
    }
}

export default Home;