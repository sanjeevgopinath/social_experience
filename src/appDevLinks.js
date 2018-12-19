import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Timeline, TimelineEvent, TimelineBlip} from 'react-event-timeline';
import './eventInfo.css';

class appDevLinks extends Component {
    render() {
        return(
            <div class="eventinfo">
                <h3>AppDev Session Links</h3>
                <ul>
									<li><a href="https://otube.oracle.com/media/t/1_diecxci0">API, JSON concepts</a></li>
									<li><a href="https://otube.oracle.com/media/1_43f90b6f">Microservices Architecture</a></li>
									<li><a href="https://otube.oracle.com/media/1_yotzbfil">Oracle Digital Assistant overview</a></li>
									<li><a href="https://otube.oracle.com/media/1_ss222iff">API Cloud Service overview</a></li>
									<li><a href="https://otube.oracle.com/media/1_jcv3zm2f">Service Mesh</a></li>
								</ul>
            </div>

        );
    }
}

export default appDevLinks