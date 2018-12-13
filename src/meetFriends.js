import React, { Component } from 'react';

import './meetFriends.css'

class meetFriends extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            colleague_otp: '',
            my_otp: '',
        }
        this.handleChange = this.handleChange.bind(this);
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
                        <input type="text" class="form-control" name="colleague_otp" placeholder="ABC4E6" value={colleague_otp} onChange={this.handleChange}/>
                        <button className="btn btn-primary btn-addConnection" type="submit">Add Connection</button>
                    </div>
                </div>
                <div class="card card-post">                
                    <div class="card-body card-post-body">
                        <p>{ my_otp } </p>
                        <p>If you would like to provide an OTP to your colleague:</p>
                        <button className="btn btn-primary" type="submit">Generate OTP</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default meetFriends