import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Img  from 'react-image';

import './execMessage.css'
class execMessage extends Component {
    render() {
        return(
            <div>
                <div class="container">
                    <div class="author-card">
                        <div class="row align-items-center justify-content-center">
                                <Img class="avatar col-xs-3" src="vaibhav_gawde.jpg" />
                                <div class="col-9"><span class="author-name">Vaibhav Gawde</span><br /><span class="author-title">Head - India Solution Engineering</span></div>
                        </div>
                    </div>
                    <hr />
                    <div class="exec-message-content">
                        <p>Hello { localStorage.getItem("firstname") },</p>
                        <p>Welcome to the FY20 India SE Symposium!</p>
                        <p class="quote"><strong>“The new FY20 Message Goes Here”</strong></p>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>See you all at Amritsar!</p>
                        <p>Regards,</p>
                        <p>Vaibhav Gawde</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default execMessage