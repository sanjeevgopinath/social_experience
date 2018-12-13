import React, { Component } from 'react';
import {config} from './config.js';
import {authService} from './authService.js';
import { Route, Redirect } from 'react-router-dom';

class resetPassword extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            password_1: '',
            password_2: '',
            diff_password: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handlePostSubmit = this.handlePostSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        this.setState({ diff_password: false });
    }

    handlePostSubmit(e) {
        e.preventDefault();
        
        if(this.state.password_1 === this.state.password_2) {
            var payload = JSON.stringify({
                "password": this.state.password_1,
            });
            this.setState({ diff_password: false });
            fetch(config.api_server + config.path_resetPassword, {
                method: 'POST',
                mode: "cors",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Authorization": "Bearer " + localStorage.getItem("token"),
                },
                body: payload
            })
            .then(authService.signout())
            .then(this.props.history.push('/Login'));
            
        }
        else {
            this.setState({ diff_password: true });
        }
    }

    render() {
        const { password_1, password_2, diff_password } = this.state;
        return(
            <div class="post-form">
                <div class="post-form-title">Reset Password</div>
                { diff_password && <span>Passwords don't match!</span> }
                <form name="form" onSubmit={this.handlePostSubmit}>  
                <label class="card-text" htmlFor="inputEmail">Enter a new password:</label>
                <input type="password" class="form-control" name="password_1" placeholder="" value={password_1} onChange={this.handleChange}/>
                <label class="card-text" htmlFor="inputEmail">Enter again:</label>
                <input type="password" class="form-control" name="password_2" placeholder="" value={password_2} onChange={this.handleChange}/>
                <button type="button" class="btn btn-success post-button" type="submit">Reset</button>
                </form>
            </div>
        );
    }
}

export default resetPassword