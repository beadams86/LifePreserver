import React from 'react';

import base from './Base';

import ProgressBar from '../Components/Progress/ProgressBar';

class Home extends React.Component{

    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        base.auth().signOut();
    }
    render(){
        return(
            <section className="site-section text-center">
                <div className="container hero-container">
                    <h1>Good Afternoon {this.props.user}</h1>
                    <button onClick={this.logout}>Logout</button>
                    <ProgressBar value="20" />
                </div>
            </section>
        );
    }
}

export default Home;
