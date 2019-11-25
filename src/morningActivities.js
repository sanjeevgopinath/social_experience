import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Img  from 'react-image';
import {config} from './config.js';

import './cityTour.css'

/*
prekhade - 25-Nov-2019
Morning Activity 1 - Exercise
Morning Activity 2 - Heritage City Tour
Morning Activity 3 - Golden Temple Visit
*/

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
                if(response[i].eventName === "MorningActivity_1") {
                    this.setState({hideButton1: true});
                    this.setState({registeredContent: response[i].eventName});
                    break;
                }
                if(response[i].eventName === "MorningActivity_2") {
                    this.setState({hideButton1: true});
                    this.setState({registeredContent: response[i].eventName});
                    break;
                }
                if(response[i].eventName === "MorningActivity_3") {
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
            payload = 'MorningActivity_1';
        }
        if(val === 2) {
            payload = 'MorningActivity_2';
        }
        if(val === 3) {
            payload = 'MorningActivity_3';
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
                <p class="caption">Registration for Day</p>
                
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#" onClick={this.handlePageTransition.bind(this, 1)}>Activity 1</a></li>
                        <li class="page-item"><a class="page-link" href="#" onClick={this.handlePageTransition.bind(this, 2)}>Activity 2</a></li>
                        <li class="page-item"><a class="page-link" href="#" onClick={this.handlePageTransition.bind(this, 3)}>Activity 3</a></li>
                    </ul>
                </nav>
                
                { this.state.tourSelectedId === 1 && <div>
                                <h3>Exercise</h3>
                                <Img class="card-img-top tour_pic" src="MorningExercises.jpg" alt="Card image cap"/>
                                
                                { !this.state.hideButton1 && <button type="button" class="btn btn-success post-button" onClick={this.handleRegistration.bind(this, 1)}>Register</button> }
                                </div> }
                
                
                { this.state.tourSelectedId === 2 && <div>
                                <h3>Heritage City Tour</h3>
                                <Img class="card-img-top tour_pic" src="city_tour.jpg" alt="Card image cap" />
                                
                                { !this.state.hideButton1 && <button type="button" class="btn btn-success post-button" onClick={this.handleRegistration.bind(this, 2)}>Register</button> } 
                                </div> }
                
                
                { this.state.tourSelectedId === 3 && <div>
                                <h3>Golden Temple Visit</h3>
                                <Img class="card-img-top tour_pic" src="golden_temple.jpg" alt="Card image cap" />
                                { !this.state.hideButton1 && <button type="button" class="btn btn-success post-button" onClick={this.handleRegistration.bind(this, 3)}>Register</button> }
                                </div> }
                { <span class="tour-message">You have registered for { registeredContent }<br /></span>}
                
            </div>
        );
    }
}

export default morningActivities