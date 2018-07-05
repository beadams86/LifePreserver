import React, { Component } from 'react';
import '../Assets/Stylesheets/style.scss';
import  base  from './Base';

import Home from './Home';
import Login from './Login';

class LPApp extends Component{

    constructor(props){
        super(props);
        this.state = {
            user:{
                email:'',
                password:'',
            },
        }
    }

    componentDidMount(){
        this.authListener();
    }

    authListener(){
    base.auth().onAuthStateChanged((user) => {
        console.log(user);
        if (user){
            this.setState({ user });
            localStorage.setItem('user', user.uid);
        }
        else{
            this.setState({ user: null });
            localStorage.removeItem('user');
        }
    })
    }

    render (){
        return(
            <div className="App">
                <div className="login">
        {this.state.user ? (<Home user={this.state.user.email} />) : (<Login/>)}
                </div>
            </div>
        )
    }
}

export default LPApp;