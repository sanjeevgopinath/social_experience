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
						title=" 🛫 Arrive at Amritsar !"
						titleStyle={{ fontWeight: "bold" }}
						subtitle=" SE Symposium 2019 is Coming !"
						subtitleStyle={{ color: "Red" }}
						createdAt="2nd Dec - 8:00 AM"
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
						<img src="https://goldwallpapers.com/uploads/posts/amritsar-golden-temple-wallpaper/amritsar_golden_temple_wallpaper_001.jpg" />
					  </TimelineEvent>
					  <TimelineEvent
						title=" 🏨 Checkin at Taj Swarna"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="2nd December, 2019 - 8 AM"
						subtitle=" Hotel Checkin"
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
						<p class="timeline-content">Hotel Address:</p>
						<div>
						Plot No. C-3, Outer Circular Road, Opp. Basant Avenue , Amritsar , 143001.{" "}
						  <p class="timeline-content">
							Phone: +91 0183-6658000
						  </p>
						</div>
					  </TimelineEvent>
					  <TimelineEvent
						title="Relax"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="2nd December - until 2 PM"
						subtitle="🍔 Indulge "
						subtitleStyle={{ color: "Red" }}
						icon={
						  <i className="material-icons xs-18">
							room_service
						  </i>
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
						<div>
						  Take a stroll, Relax, Say hello to your colleagues, Make some new Friends and Enjoy some Amritsari Kulchas !
						</div>
					  </TimelineEvent>
					  <TimelineEvent
						title="Gearing up"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="2nd December - 3 PM"
						subtitle="✔ Trinity Hall"
						subtitleStyle={{ color: "Red" }}
						icon={
						  <i className="material-icons xs-18">access_time</i>
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
						<div>
						  Assemble at 3 PM, in the Trinity Hall 
						  As SE's we always love to be ahead of time !
						</div>
					  </TimelineEvent>
					  <TimelineEvent
						title="Day 1 Event Starts !"
						titleStyle={{ fontWeight: "bold" }}
						subtitle="✔ Trinity Hall"
						subtitleStyle={{ color: "Red" }}
						createdAt="2nd December - 3:30 - 4 PM"
						icon={<i className="material-icons xs-18">event</i>}
						style={{ boxShadow: "0 0 3px 1px" }}
						container="card"
						cardHeaderStyle={{
						  backgroundColor: "#ADD8E6",
						  color: "#503331"
						}}
						collapsible
						showContent
					  >
						{" "}
						Marks the start of the 3 day SE Symposium 2019 !
						<TimelineBlip
						  title="SE Symposium 2019 Welcome Address - Vaibhav Gawde"
						  icon={
							<i className="material-icons xs-18">star </i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>
						<TimelineBlip
						  title="HR Workshop Introduction - Balachandar Gurumurthy"
						  icon={
							<i className="material-icons xs-18">
							  how_to_reg{" "}
							</i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#9c27b0" }}
						/>
						
					  </TimelineEvent>

						<TimelineEvent
						title="HR Workshop"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="2nd Dec - 4:00 PM - 6:30 PM"
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
						  title="Simulation: Navigating in VUCA World - Crossover Leadership Team"
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
						title="Learning by Experience !"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="2nd Dec - 6:30 PM - 7 PM"
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
						  title="DevSecOps - Our Own SE Symposium App ! - Sanjeev Gopinath"
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
						title="Learning by Experience !"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="2nd Dec - 7 PM - 7:30 PM"
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
						  title="Business Simplification using ODA - Vidyut Verma"
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
						title="Break Time ! - Ajay Ahuja"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="2nd Dec -7:30 PM - 8 PM"
						
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
						title="Awards and Rewards !"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="2nd Dec - 8 PM - 8:30 PM"
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
						  title="Tenure, Customer Advocacy & Peer Nomination Awards"
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
						title="Let's Gather for Some Fun !"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="2nd Dec - 8:30 PM - 8:45 PM"
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
						  title="Group Activity - Ajay Ahuja"
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
						title="Executive Message"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="2nd Dec - 8:45 PM - 9:15 PM"
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
						  title="Solution Engineering Career Roadmap - Nick Jackson"
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
						title="Awards !"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="2nd Dec - 9:15 PM - 9:45 PM"
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
						  title="Club T, Cloud Star Awards"
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
						title="Let's Know Each Other Better !"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="2nd Dec - 9:45 PM - 10:30 PM"
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
						  title="Peer Networking"
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