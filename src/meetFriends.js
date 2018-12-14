import React, { Component } from 'react';
import { config } from './config.js';
import './meetFriends.css'
import { authService } from './authService.js'

class meetFriends extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            colleague_otp: '',
            my_otp: '',
            firstName: '',
            lastName: '',
            location: '',
            designation: '',
            hideAlert: true,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAddConnectionSubmit = this.handleAddConnectionSubmit.bind(this);
        this.handleGenerateOTPSubmit = this.handleGenerateOTPSubmit.bind(this);
    }

    handleAddConnectionSubmit(e) {
        e.preventDefault();
        var payload = JSON.stringify({
            "OTP": this.state.colleague_otp,
        });

        fetch(config.api_server + config.path_validate_otp, {
            method: 'POST',
            mode: "cors",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + localStorage.getItem("token"),
            },
            body: payload
        })
        /* .then(function(response) {
            if (response.status === 401) {
              authService.signout();
              this.props.history.push('\Login');
            }
            else {
                return response;
            }
          }) */
        .then(response => response.json())   
        .then(response => {
            this.setState({firstName: response.firstName});
            this.setState({lastName: response.lastName});
            this.setState({designation: response.designation});
            this.setState({location: response.location});
            this.setState({hideAlert: false});
        })
        .then(console.log("Guess validated?"));
    }

    handleGenerateOTPSubmit(e) {
        e.preventDefault();
        fetch(config.api_server + config.path_generate_otp, {
            method: 'GET',
            mode: "cors",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            },
        })
        .then(response => response.json())
        .then(response => {
            this.setState({my_otp: response.OTP});
        });
    }

    nullify

    handleChange(e){ 
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    
    render() {
        const { colleague_otp, my_otp, firstName, lastName, location, designation, hideAlert } = this.state;
        return(
            <div>
                <h3>NetworKING</h3>
                <div class="card card-post">                
                    <div class="card-body card-post-body">
                        { !hideAlert && <div class="alert alert-success" role="alert">
                            <h4 class="alert-heading">Well done!</h4>
                            <p>You have successfully added { firstName + ' ' + lastName }</p>
                            <hr />
                            <p class="mb-0">Designation: { designation } </p>
                            <p class="mb-0">Location: { location } </p>
                        </div> }
                        <p class="card-text">Ask your colleague to generate an OTP and enter it here: </p>
                        <form onSubmit={ this.handleAddConnectionSubmit }>
                            <input type="text" class="form-control" name="colleague_otp" placeholder="ABC4E6" value={colleague_otp} onChange={this.handleChange}/>
                            <button className="btn btn-primary btn-addConnection" type="submit">Add Connection</button>
                        </form>
                    </div>
                </div>
                <div class="card card-post">                
                    <div class="card-body card-post-body">
                        <form onSubmit={this.handleGenerateOTPSubmit}>
                            
                            <p>Share your OTP to your colleage. Every OTP is valid for one connection only.</p>
        <button className="btn btn-primary" type="submit">Generate OTP</button>{ my_otp && <span class="otp fade show">OTP: { my_otp }</span> }
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default meetFriends