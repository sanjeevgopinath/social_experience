import React, { Component } from 'react';
import { config } from './config.js';
import './profileInfo.css';

class profileInfo extends Component {
    constructor(props) {
        super(props);
        console.log(localStorage.getItem("userProfileInfo"));
        if(localStorage.getItem("userProfileInfo")) {
            console.log("True State");
            this.state = {
                pageLoaded: true,
                userProfileInfo: JSON.parse(localStorage.getItem("userProfileInfo"))
            };
        }
        else {
            console.log("False State");
            this.state = {
                pageLoaded: false,
                userProfileInfo: [],
            };
        }
        this.onSignOutButtonClick = this.onSignOutButtonClick.bind(this);
        this.onResetPasswordClick = this.onResetPasswordClick.bind(this);
    }

    onSignOutButtonClick(event) {
        localStorage.clear();
        this.props.history.push('/login');
    }

    onResetPasswordClick(event) {
        this.props.history.push('/resetPassword');
    }

    getUsersCurrent() {
        fetch(config.api_server + config.path_getUsersCurrent, {
            method: 'GET',
            mode: "cors",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            },
        })
        .then(response => response.json())
        .then(response => {
            localStorage.setItem("userProfileInfo", JSON.stringify(response));
            return response;
        })
        .then(response => this.setState({ userProfileInfo: response }))
        .then(this.setState({ pageLoaded: true }))
        .catch();
    }

    componentDidMount() {
        this.getUsersCurrent();
    }

    render() {
        return(
            <div class="container">
                <div class="card card-profileInfo">
                    <div class="card-body">
                        { console.log(this.state.pageLoaded) }
                        <h5 class="card-title card-title-profileInfo">{this.state.pageLoaded && (this.state.userProfileInfo.firstName + " " + this.state.userProfileInfo.lastName)}</h5>
                        <p class="card-text card-text-profileInfo">{ this.state.pageLoaded && ("Username: " + this.state.userProfileInfo.username) } </p>
                        <p class="card-text card-text-profileInfo">{ this.state.pageLoaded && ("Designation: " + this.state.userProfileInfo.designation) } </p>
                        <p class="card-text card-text-profileInfo">{ this.state.pageLoaded && ("Business Unit: " + this.state.userProfileInfo.department) } </p>
                        <p class="card-text card-text-profileInfo">{ this.state.pageLoaded && ("Location: " + this.state.userProfileInfo.location) } </p>
                        <p class="card-text card-text-profileInfo">{ this.state.pageLoaded && ("Room #: " + this.state.userProfileInfo.room_no) } </p>
                        <div class="row justify-content-center">
                            <button type="button" class="btn btn-primary" onClick={this.onResetPasswordClick}>Reset Password</button>
                            <br /><button type="button" class="btn btn-danger" onClick={this.onSignOutButtonClick}>Sign Out</button>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default profileInfo