import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Img  from 'react-image';
import CityTourPage from './CityTourPage';
import { config } from './config.js';
import './cityTour.css'

class cityTour extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tourSelectedId: 1,
            hideButton: false,
            registeredContent: "None",
        }
        this.handlePageTransition = this.handlePageTransition.bind(this);
        this.handleRegistration = this.handleRegistration.bind(this);
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
            for(var i=0; i < response.length; i++) {
                if(response[i].eventName === "Tour 1") {
                    this.setState({hideButton: true});
                    this.setState({registeredContent: response[i].eventName});
                    break;
                }
                if(response[i].eventName === "Tour 2") {
                    this.setState({hideButton: true});
                    this.setState({registeredContent: response[i].eventName});
                    break;
                }
                if(response[i].eventName === "Tour 3") {
                    this.setState({hideButton: true});
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

    handlePageTransition(val) {
        console.log(val);
        this.setState({ tourSelectedId: val});
    }

    handleRegistration(val) {
        console.log(val);
        var payload = '';
        if(val === 1) {
            payload = 'Tour 1';
        }
        if(val === 2) {
            payload = 'Tour 2';
        }
        if(val === 3) {
            payload = 'Tour 3';
        }
        var payloadJSON = JSON.stringify({
            "eventName": payload,
        });
        fetch(config.api_server + config.path_cityTour, {
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
            console.log(response);
            if(response.message.includes("Succesful")) {
                console.log(payload);
                this.setState({hideButton: true});
                this.setState({registeredContent: payload});
            }
        });
        
    }

    render() {
        const {tourSelectedId1, hideButton1, registeredContent1 } = this.state;
        return(
            <div class="container">
                <h3>City Tour Registration</h3>
                <p class="caption">Register for one of the Day-2 City Tours (18th 4 PM)...</p>
                
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#" onClick={this.handlePageTransition.bind(this, 1)}>Tour 1</a></li>
                        <li class="page-item"><a class="page-link" href="#" onClick={this.handlePageTransition.bind(this, 2)}>Tour 2</a></li>
                        <li class="page-item"><a class="page-link" href="#" onClick={this.handlePageTransition.bind(this, 3)}>Tour 3</a></li>
                    </ul>
                </nav>
                
                { this.state.tourSelectedId === 1 && <div>
                                <h5>Pink City Tour</h5>
                                <p>Coverage: Guided tour of Jal Mahal, Hawa Mahal, Johri Bazaar and Bapu Bazaar</p>
                                <Img class="card-img-top tour_pic" src="https://aivloqpzen.cloudimg.io/width/400/n/http://sesymposium.tech/tour_1.png" alt="Card image cap" />
                                <ul>
                                    <li>Start the evening by experiencing the picturesque view of Jal Mahal - an Rajput Style architectural showcase in Man Sagar, Jaipur</li>
                                    <li>Explore the majestic of City by spending time in old walled city. Every building within the walled historic centre is painted a terracotta “pink” colour</li>
                                    <li>Enjoy the experience of ultimate shopping paradise of Rajasthani products ranging from textiles to handicrafts to brass works to precious stones</li>
                                    <li>On the way taste the flavors of Rajasthani Food like Bikaneri Bhujia, Mirchi Bada and Pyaaz Kachori. While there are many outlets serving traditional food, however, if options confuse you then you can safely choose LMB (Laxmi Mishthan Bhandar) on the way</li>
                                </ul>
                { !this.state.hideButton && <div><span></span><button type="button" class="btn btn-success post-button" onClick={this.handleRegistration.bind(this, 1)}>Register</button></div> }
                                </div> }
                
                
                { this.state.tourSelectedId === 2 && <div><h5>Décor of Rajasthan</h5>
                                <p>Guided tour of Jal Mahal, Block Painting, Handicraft Emporium, Masala Chowk</p>
                                <Img class="card-img-top tour_pic" src="https://aivloqpzen.cloudimg.io/width/400/n/http://sesymposium.tech/tour_2.png" alt="Card image cap" />
                                <ul>
                                    <li>Start the evening by experiencing the picturesque view of Jal Mahal - an Rajput Style architectural showcase in Man Sagar, Jaipur</li>
                                    <li>Experience the Impact of live demo - Block Painting. Throughout the printing process artisans pay meticulous attention to detail in order to ensure all motifs and colors are harmonized on the fabric</li>
                                    <li>One stop shop for quintessential of Rajasthani products – Wooden handicraft, carpet, gems, marble, paintings, textiles (Bandhani & Quilt) & many more!!! </li>
                                    <li>Form of magical taste at Masala Chowk - here are about 22 renowned stalls available here for the best of street food around the city. All these food vents offer a huge mélange of street food right from the Famous Gulab Sakri, Chat, gol-gappas, Ice- Cream Faluda, Dosa, Tea and so on.</li>
                                </ul>
                { !this.state.hideButton && <div><span></span><button type="button" class="btn btn-success post-button" onClick={this.handleRegistration.bind(this, 2)}>Register</button></div> }
                                </div> }
                
                
                { this.state.tourSelectedId === 3 && <div><h5>Temple Tour in Pink City!!!</h5>
                                <p>Guided tour of Jal Mahal, Ganesha Mandir, Birla Mandir, Masala Chowk</p>
                                <Img class="card-img-top tour_pic" src="https://aivloqpzen.cloudimg.io/width/400/n/http://sesymposium.tech/tour_3.png" alt="Card image cap" />
                                <ul>
                                    <li>Start the evening by experiencing the picturesque view of Jal Mahal - an Rajput Style architectural showcase in Man Sagar, Jaipur</li>
                                    <li>Birla Temple is dedicated to Lord Vishnu (Narayan), the preserver and his consort Lakshmi, the Goddess of wealth. The beautiful white marble temple mesmerizes the onlookers, when it glows at night. Stained glass windows depict the scenes from Hindu scriptures. The images of Lakshmi and Narayan attract the attention, being made out from one piece of marble.</li>
                                    <li>The Ganesh Temple, located on a small hill named Moti Dungri (Hill of Pearls or Pearl Hill), is devoted to the worship of Lord Ganesha. The temple is a part of the beautiful Moti Dungri Palace</li>
                                    <li>Form of magical taste at Masala Chowk - here are about 22 renowned stalls available here for the best of street food around the city. All these food vents offer a huge melange of street food right from the Famous Gulab Sakri, Chat, gol-gappas, Ice- Cream Faluda, Dosa, Tea and so on.</li>
                                </ul>
                { !this.state.hideButton && <div><span></span><button type="button" class="btn btn-success post-button" onClick={this.handleRegistration.bind(this, 3)}>Register</button></div>}
                                </div> }
                
                <span class="tour-message"> You have registered for { this.state.registeredContent }</span>
            </div>
        );
    }
}

export default cityTour