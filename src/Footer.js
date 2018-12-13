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
                            <Link to={`/livePoll`}><span class="material-icons bottom-bar-icon">poll</span></Link>
                        </div>
                        <div class="col-2">
                            <Link to={`/puzzly`}><span class="material-icons bottom-bar-icon">grid_on</span></Link>
                        </div>
                        <div class="col-2">
                            <Link to={`/puzzly`}><span class="material-icons bottom-bar-icon">star</span></Link>
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