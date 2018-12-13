import React, { Component } from 'react';
import { config } from './config.js';
import './meetFriends.css'

class meetFriends extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            colleague_otp: '',
            my_otp: '',
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
                "Authorization": "Bearer " + localStorage.getItem("token"),
            },
            body: payload
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
        .then(response => {
            this.setState({my_otp: response.otp});
        });
    }

    handleChange(e){ 
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    
    render() {
        const { colleague_otp, my_otp } = this.state;
        return(
            <div>
                <h3>NetworKING</h3>
                <div class="card card-post">                
                    <div class="card-body card-post-body">
                        <p class="card-text">Enter your colleague's OTP: </p>
                        <form onSubmit={ this.handleAddConnectionSubmit }>
                            <input type="text" class="form-control" name="colleague_otp" placeholder="ABC4E6" value={colleague_otp} onChange={this.handleChange}/>
                            <button className="btn btn-primary btn-addConnection" type="submit">Add Connection</button>
                        </form>
                    </div>
                </div>
                <div class="card card-post">                
                    <div class="card-body card-post-body">
                        <form onSubmit={this.handleGenerateOTPSubmit}>
                            <p>{ my_otp }</p>
                            <p>If you would like to provide an OTP to your colleague:</p>
                            <button className="btn btn-primary" type="submit">Generate OTP</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default meetFriends