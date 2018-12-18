import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Img  from 'react-image';

import './cityTour.css'
class CityTourPage extends Component {

    constructor(props) {
        super(props);
        this.state = { tourPageID_2: this.props.tourPageId};
        this.handleRegisterTour = this.handleRegisterTour.bind(this);
    }

    handleRegisterTour(val) {
        console.log(val);
    }

    render() {
        console.log(this.props.tourPageId);
        return(<div>Tour {this.state.tourPageID_2} </div>);
    }
}

export default CityTourPage