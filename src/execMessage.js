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
                        <p>ARE YOU READY FOR BALI?</p>
                        <p>Regards,</p>
                        <p>Vaibhav Gawde</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default execMessage