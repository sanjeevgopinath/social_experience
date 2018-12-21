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
                                <Img class="avatar col-xs-3" src="https://aivloqpzen.cloudimg.io/width/600/n/http://sesymposium.tech/vaibhav_gawde.jpg" />
                                <div class="col-9"><span class="author-name">Vaibhav Gawde</span><br /><span class="author-title">Head - India Sales Consulting</span></div>
                        </div>
                    </div>
                    <hr />
                    <div class="exec-message-content">
                        <p>Hello { localStorage.getItem("firstname") },</p>
                        <p>Welcome to the FY19 India SE Symposium!</p>
                        <p class="quote"><strong>“EVERYBODY GETS THE CULTURE THEY DESERVE”</strong></p>
                        <p>And WE at the India SE team have managed to build our own culture by making SE symposium as an annual phenomenon. This year’s theme is our transformation from SC to SE – Sales Consulting to Solution Engineering, much needed transition for our journey towards India Cloud DC. Join us to hear from India SMT, To learn from Cloud experts, To build, extend and nurture your network, To share and get enlighten from each other’s experiences, most importantly to celebrate our success and to have fun.</p>
                        <p>See you all at The Pink City!</p>
                        <p>Regards,</p>
                        <p>Vaibhav Gawde</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default execMessage