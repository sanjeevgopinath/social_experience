import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Img  from 'react-image';
import {config} from './config.js';

import './cityTour.css'
class morningActivities extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tourSelectedId: 1,
            hideButton1: false,
            registeredContent: 'None',
        }
        this.handlePageTransition = this.handlePageTransition.bind(this);
        this.handleRegistration = this.handleRegistration.bind(this);
    }

    handlePageTransition(val) {
        console.log(val);
        this.setState({ tourSelectedId: val});
    }

    getEventRegistration() {
        fetch(config.api_server + config.path_getEvent, {
            method: 'GET',
            mode: "cors",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + localStorage.getItem("token"),
            },
            
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            for(var i=0; i < response.length; i++) {
                if(response[i].eventName === "Nature Walk") {
                    this.setState({hideButton1: true});
                    this.setState({registeredContent: response[i].eventName});
                    break;
                }
                if(response[i].eventName === "Cycling") {
                    this.setState({hideButton1: true});
                    this.setState({registeredContent: response[i].eventName});
                    break;
                }
                if(response[i].eventName === "Yoga/Gym") {
                    this.setState({hideButton1: true});
                    this.setState({registeredContent: response[i].eventName});
                    break;
                }
            }
        });
    }

    componentDidMount() {
        this.getEventRegistration();
        this.autoRefreshInterval = setInterval(() => this.getEventRegistration(), 20000);
    }

    handleRegistration(val) {
        console.log(val);
        var payload = '';
        if(val === 1) {
            payload = 'Nature Walk';
        }
        if(val === 2) {
            payload = 'Cycling';
        }
        if(val === 3) {
            payload = 'Yoga/Gym';
        }
        var payloadJSON = JSON.stringify({
            "eventName": payload,
        });
        fetch(config.api_server + config.path_morning, {
            method: 'POST',
            mode: "cors",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + localStorage.getItem("token"),
            },
            body: payloadJSON
        })
        .then(response => response.json())
        .then(response => {
            if(response.message.includes("Succesful")) {
                console.log(payload);
                this.setState({hideButton1: true});
                this.setState({registeredContent: payload});
                console.log(this.state.registeredContent);
            }
        });
    }

    render() {
        const {tourSelectedId, hideButton1, registeredContent} = this.state;
        return(
            <div class="container">
                <h3>Morning Activities</h3>
                <p class="caption">Registration for Day 3</p>
                
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#" onClick={this.handlePageTransition.bind(this, 1)}>Activity 1</a></li>
                        <li class="page-item"><a class="page-link" href="#" onClick={this.handlePageTransition.bind(this, 2)}>Activity 2</a></li>
                        <li class="page-item"><a class="page-link" href="#" onClick={this.handlePageTransition.bind(this, 3)}>Activity 3</a></li>
                    </ul>
                </nav>
                
                { this.state.tourSelectedId === 1 && <div>
                                <h5>Nature Walk: Guided tour to Smriti Van Jaipur</h5>
                                <Img class="card-img-top tour_pic" src="https://aivloqpzen.cloudimg.io/width/400/n/http://sesymposium.tech/nature.jpg" alt="Card image cap" />
                                <p>Location: Smirit Van is around 4 kms from Hotel Lalit. </p>
                                <p>Reaching there: Coach is arranged for transfer from Hotel. Coach leaves sharp at 6 AM. It takes around 10--15 minutes to reach there. It can take 45 minutes to 1 hour to explore and cover the network of fine trails around the little hill & on ridge etc.</p>
                                <p>About Location: Smriti Van Jaipur is a Bio-Diversity forest. During highly destructive flood of 1981 this area was inundated and deep ravines were formed. The area was taken upto plant trees in memory of the near and dear ones. </p>
                                <p>You can enjoy Aloe Vera, Turmeric, Amla and other organic juices outside the Smriti Van.</p>
                                { !this.state.hideButton1 && <button type="button" class="btn btn-success post-button" onClick={this.handleRegistration.bind(this, 1)}>Register</button> }
                                </div> }
                
                
                { this.state.tourSelectedId === 2 && <div><h5>Cycling: Cycle Track around Jawahar Circle</h5>
                                <Img class="card-img-top tour_pic" src="https://aivloqpzen.cloudimg.io/width/400/n/http://sesymposium.tech/cycling.png" alt="Card image cap" />
                                <p>Location: Jawahar Circle is around 600 meters from Hotel Lalit.</p>
                                <p>Reaching there: A 5 mintues walk from Hotel will take up to Jawahar circle. We will pick up cycles there and ride around the Jawahar circle for 45 mins – 1 hour.</p>
                                <p>Jawahar circle has an exclusive cycling track which runs for 1.5 km. </p>
                                <p>On way back, around 100 meters before the Hotel, you can enjoy freshly prepared Hot Tea with matti</p>
                                { !this.state.hideButton1 && <button type="button" class="btn btn-success post-button" onClick={this.handleRegistration.bind(this, 2)}>Register</button> } 
                                </div> }
                
                
                { this.state.tourSelectedId === 3 && <div><h5>Yoga and Gymnasium</h5>
                                <p>Follow the trained and experienced Yoga instructor OR hit the Hotel Gymanisum.</p>
                                { !this.state.hideButton1 && <button type="button" class="btn btn-success post-button" onClick={this.handleRegistration.bind(this, 3)}>Register</button> }
                                </div> }
                { <span class="tour-message">You have registered for { registeredContent }<br /></span>}
                
            </div>
        );
    }
}

export default morningActivities