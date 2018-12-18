import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Footer extends Component {
    render() {
        return(
            <div class="Footer">        
                <div class = "bottom-bar container-fluid fixed-bottom">
                    <div class="row align-items-center">
                        <div class="col-2">
                            <Link to={`/newsfeed`}><span class="material-icons bottom-bar-icon">public</span></Link>
                        </div>
                        <div class="col-2">
                            <Link to={`/meetFriends`}><span class="material-icons bottom-bar-icon">group_add</span></Link>
                        </div>
                        <div class="col-2">
                            <Link to={`/morningActivities`}><span class="material-icons bottom-bar-icon">wb_sunny</span></Link>
                        </div>
                        <div class="col-2">
                            <Link to={`/cityTour`}><span class="material-icons bottom-bar-icon">commute</span></Link>
                        </div>
                        <div class="col-2">
                            <span class="material-icons bottom-bar-icon">star</span>
                        </div>
                        <div class="col-2">
                            <Link to={`/eventInfo`}><span class="material-icons bottom-bar-icon">event</span></Link>
                        </div>
                    </div>
                </div>          
            </div>
        );
    }
}

export default Footer