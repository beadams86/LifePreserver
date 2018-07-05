import React from 'react';

import base from './Base';
import AppNav from '../Components/AppNav';

import LoginSplash from '../Assets/Images/Login/Splash.png';

import '../Assets/Stylesheets/style.scss';
import '../Assets/Stylesheets/Pages/Login.scss';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: '',
        }
    }

    login(e){
        e.preventDefault();
        base.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            console.log(error);
        })
    }

    signup(e){
        e.preventDefault();
        base.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).then((u) =>{console.log(u)}).catch((error) => {
            console.log(error);
        })
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value});
    }
    render(){
        return(
            <div>
                <AppNav />
                <div className="row">
                    <div className="seven columns split-content">
                    <div className="container">
                        <h1>Login</h1>
                        <p>Let the journey begin!</p>
                        <form>
                            <label htmlFor="exampleInputEmail1">Email Address</label>
                            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="textbox" id="exampleInputEmail1" placeholder="Enter Email" />
                            <small id="emailHelp" className="small gray">We'll never share your information</small>
                            <br/>
                            <label htmlFor ="exampleInputPassword1">Password</label>
                            <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="textbox" id="exampleInputPassword1" placeholder="Enter Password" />
                            <br />
                            <button type="submit" onClick={this.login} className="button button-primary">Login</button>
                            <button onClick={this.signup} className="button">Sign Up</button>
                            </form>
                        </div>
                    </div>

                    <div className="five columns split-splash"  style={{ backgroundImage: `url(${LoginSplash})` }} > </div>
                </div>

            </div>
        );
    }
}

export default Login;
