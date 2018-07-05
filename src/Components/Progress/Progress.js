import React from 'react';

import ProgressBar from './ProgressBar';

class Progress extends React.Component{
    render(){
        return(
            <section className="site-section text-center">
                <div className="container hero-container">
                    <h1>Good Afternoon, {this.props.name}</h1>
                    <ProgressBar value="20" />
                </div>
            </section>
        );
    }
}

export default Progress;
