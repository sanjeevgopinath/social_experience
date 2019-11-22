import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Timeline, TimelineEvent, TimelineBlip} from 'react-event-timeline';
import './eventInfo.css';

class eventInfo extends Component {
    render() {
        return(
            <div class="eventinfo">
                <h3>Event Information</h3>
                <hr />
					<Timeline lineColor="black">
					  <TimelineEvent
						title="Good Morning Guys ! Let's checkout !"
						titleStyle={{ fontWeight: "bold" }}
						subtitle="Hotel Check-Out"
						subtitleStyle={{ color: "Red" }}
						createdAt="5th December - 6 AM - 6:30 AM"
						icon={
						  <i className="material-icons xs-18">flight_land</i>
						}
						container="card"
						style={{ boxShadow: "0 0 3px 1px" }}
						cardHeaderStyle={{
						  backgroundColor: "#ADD8E6",
						  color: "#503331"
						}}
						collapsible
						showContent
					  >						

						<TimelineBlip
						  title="Check out from Hotel and keep your luggages in Buses !"
						  icon={
							<i className="material-icons xs-18">
							  movie_filter{" "}
							</i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>

						<div/>	

					  </TimelineEvent>
					  <TimelineEvent
						title="Time for some Desi Breakfast !"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="5th December, 2019 - 6:30 AM - 7 AM"
						subtitle="Travel"
						subtitleStyle={{ color: "Red" }}
						icon={<i className="material-icons xs-18">hotel</i>}
						style={{ boxShadow: "0 0 3px 1px" }}
						container="card"
						cardHeaderStyle={{
						  backgroundColor: "#ADD8E6",
						  color: "#503331"
						}}
						collapsible
						showContent
					  >						
					  </TimelineEvent>
						<TimelineEvent
						title="Nashta !"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="5th December - 7 AM - 9:45 AM"
						subtitle="Tour"
						subtitleStyle={{ color: "Red" }}
						icon={
						  <i className="material-icons xs-18">motorcycle</i>
						}
						style={{ boxShadow: "0 0 3px 1px" }}
						container="card"
						cardHeaderStyle={{
						  backgroundColor: "#ADD8E6",
						  color: "#503331"
						}}
						collapsible
						showContent
					  >
						<div />
						<TimelineBlip
						  title="Breakfast, Village Games, Fishing, Tractor Ride"
						  icon={
							<i className="material-icons xs-18">
							  movie_filter{" "}
							</i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>
						</TimelineEvent>

						<TimelineEvent
						title="First Bus to Airport"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="5th December - 9:45 AM - 10:15 AM"
						subtitle="Travel"
						subtitleStyle={{ color: "Red" }}
						icon={
						  <i className="material-icons xs-18">motorcycle</i>
						}
						style={{ boxShadow: "0 0 3px 1px" }}
						container="card"
						cardHeaderStyle={{
						  backgroundColor: "#ADD8E6",
						  color: "#503331"
						}}
						collapsible
						showContent
					  >						
						</TimelineEvent>
						<TimelineEvent
						title="Other Buses Leave to Airport for flights after 2PM"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="5th December - 12:15 PM - 12:45 PM"
						subtitle="Travel"
						subtitleStyle={{ color: "Red" }}
						icon={
						  <i className="material-icons xs-18">motorcycle</i>
						}
						style={{ boxShadow: "0 0 3px 1px" }}
						container="card"
						cardHeaderStyle={{
						  backgroundColor: "#ADD8E6",
						  color: "#503331"
						}}
						collapsible
						showContent
					  >						
						</TimelineEvent>

						<TimelineEvent
						title="Adios Amigos and Thank You All !"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="5th December, 2019"
						subtitle="Flight"
						subtitleStyle={{ color: "Red" }}
						icon={
						  <i className="material-icons xs-18">motorcycle</i>
						}
						style={{ boxShadow: "0 0 3px 1px" }}
						container="card"
						cardHeaderStyle={{
						  backgroundColor: "#ADD8E6",
						  color: "#503331"
						}}
						collapsible
						showContent
					  >
						<div />
						<TimelineBlip
						  title="Happy Selling and See you Soon !"
						  icon={
							<i className="material-icons xs-18">
							  movie_filter{" "}
							</i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>
						</TimelineEvent>

					</Timeline>
            </div>

        );
    }
}

export default eventInfo