import React, { Component } from 'react';
import './Login.css';
import { authService } from './authService.js';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error_ispresent_fields: true,
            error_iswrongcredential: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    componentDidMount() {
        try {
                if(authService.isAuthenticated()) {
                    this.props.history.push('/execMessage');
                }
            }
        catch {

        }
    }

    handleChange(e) {
        const { name, value } = e.target;

        this.setState({ [name]: value });
        this.setState({error_iswrongcredential: false});
    }
    
    handleLoginSubmit(e) {
        e.preventDefault();     
        const { username, password, error_ispresent_fields } = this.state;
            if(username && password) {
                this.setState({error_ispresent_fields: true});
                authService.authenticate(username, password)
                .then(response => {
                    console.log("Success Response Bro!");
                    this.props.history.push('/execMessage');
                })
                .catch(err => {
                    this.setState({error_iswrongcredential: true});
                });                
            }
            else {
                this.setState({error_ispresent_fields: false});
            }
    }

    render() {

        const { username, password, error_ispresent_fields, error_iswrongcredential } = this.state;
        return(
            <div class="login-page container-fluid">
                <div class="row">
                    <div class="col-sm-6 mx-auto">
                        <div class="card-login">
                            <div class="card-body">
                                <h5 class="card-login-title">Sign In</h5>
                                {!error_ispresent_fields && <div class="card-text alert alert-danger"><strong>Holy Guacomole!</strong> Did you miss something?</div>}
                                { error_iswrongcredential && <div class="card-text alert alert-danger"><strong>Blistering Barnacles!</strong> You have entered wrong credentials.</div>}
                                <form name="form" onSubmit={this.handleLoginSubmit}>                        
                                    <div class="form-group">
                                        <label class="card-text" htmlFor="inputEmail">Oracle Email Alias</label>
                                        <input type="text" class="form-control" name="username" placeholder="e.g. larry.ellison" value={username} onChange={this.handleChange}/>
                                        
                                        <label class="card-text" htmlFor="inputPassword">Password</label>
                                        <input type="password" class="form-control" name="password" value={password} onChange={this.handleChange}/>
                                        <small id="passwordnote" class="form-text text-muted">Do not enter your SSO Password here.</small>
                                        <br></br>
                                        <button className="btn btn-primary" type="submit">Join the Party!</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;