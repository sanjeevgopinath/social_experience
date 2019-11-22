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
						title="Good Morning Amritsar ! - Morning Activities"
						titleStyle={{ fontWeight: "bold" }}
						subtitle="Registration Required"
						subtitleStyle={{ color: "Red" }}
						createdAt="4th Dec - 6 AM - 7:30 AM"
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
						<div>
						<p>Cycling</p>
						<p>Heritage Walk</p>
						<p>Golden Temple</p>						  
						</div>	
					  </TimelineEvent>
					  <TimelineEvent
						title="Let's have some Breakfast !"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="4th December, 2019 - 7:30 AM - 9 AM"
						subtitle="Pre-Function Area of Trinity Hall"
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
						title="Thought Leadership Session"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="4th Dec - 9 AM - 10 AM"
						subtitle="Trinity Hall"
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
						  title="Exadata Everywhere ! - Subhash Guddad"
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
						title="Architecture Best Practices"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="4th Dec - 10:00 AM - 10:30 AM"
						subtitle="Trinity Hall"
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
						  title="Microservices - Ramakrishnan K and Puneet Rekhade"
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
						title="Learning by Experience"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="4th Dec - 10:30 AM - 11 AM"
						subtitle="Trinity Hall"
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
						  title="Retail Demand Forecasting - Hrushikesh Khopkar"
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
						title="Tea Break !"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="4th Dec -11 AM - 11:15 AM"
						
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
						title="Architecture Best Practices"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="4th Dec - 11:15 AM - 11:45 AM"
						subtitle="Trinity Hall"
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
						  title="Enterprise Data Lake - Harjul Jobanputra and Kavindra Singh"
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
						title="Team Building Activity"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="4th Dec - 11:45 AM - 12:15 PM"
						subtitle="Trinity Hall"
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
						  title="Team Building Activity - Mehernaz Lath"
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
						title="Thought Leadership Session"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="4th Dec - 12:15 PM - 1 PM"
						subtitle="Trinity Hall"
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
						  title="Demystifying Data & Cloud Compliance - Vamsi Ramakrishnan and Prateek Gaur"
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
						title="Papi Pet Ka Sawaal !"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="4th Dec - 1 PM - 1:45 PM"
						subtitle="Lunch Time"
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
						title="Executive Message"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="4th Dec - 1:45 PM - 2:15 PM"
						subtitle="Trinity Hall"
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
						  title="Closing Comments - Vaibhav Gawde"
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
						title="Say Makkhan !"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="4th Dec - 2:15 PM - 2:45 PM"
						subtitle="Trinity Hall"
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
						  title="SE Group Photo Session"
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
						title="B.O.R.D.E.R."
						titleStyle={{ fontWeight: "bold" }}
						createdAt="4th Dec - 2:45 PM - 3:45 PM"
						subtitle="Travel to Wagah Border"
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
						title="Wagah Border Ceremony"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="4th Dec - 3:45 PM - 5:30 PM"
						subtitle="Wagah Border"
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
						  title="Wagah Border Ceremony !"
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
						title="Travel To Taj Swarna from Wagah Border"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="4th Dec - 5:30 PM - 7 PM"
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
						title="Talent Show !"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="4th Dec - 7 PM - 9 PM"
						subtitle="Trinity Hall"
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
						  title="Talent Show and Fun Evening :)"
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
						title="Team Networking"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="4th Dec - 9 PM - 11 PM"
						subtitle="Trinity Hall"
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
						  title="Dinner and Networking ! We are checking out tomorrow early morning at 6 AM, so please pack your bags before you guys hit the bed."
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