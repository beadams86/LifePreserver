import React from 'react';

class ProgressBar extends React.Component{
    render(){
        return(
            <div className="progress-bar">
                <span className="progress-bar__fill">{this.props.value}</span>
            </div>
        );
    }
}

export default ProgressBar;
