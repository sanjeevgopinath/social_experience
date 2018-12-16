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
						title=" 🛫 Arrive at Jaipur"
						titleStyle={{ fontWeight: "bold" }}
						subtitle=" SE Symposium 2018 is coming"
						subtitleStyle={{ color: "Red" }}
						createdAt="17th Dec - 7:00 AM"
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
						<p class="timeline-content">
						  Contact Person at Airport:
						</p>
						<p class="timeline-content">
						  {" "}
						  Sandeep Rathee (CIGMA) - +918130671272.
						</p>
						<img src="https://content3.jdmagicbox.com/comp/jaipur/b6/0141px141.x141.170315155735.x1b6/catalogue/india-trip-on-wheels-sunderpath-bani-park-jaipur-453rgw4.jpg" />
					  </TimelineEvent>
					  <TimelineEvent
						title=" 🏨 Checkin at Hotel"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="17th Dec - 7:30 AM"
						subtitle=" The Lalit, Jaipur"
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
						  The Lalit, 2B & 2C, Jawahar Circle, Near, Jagatpura
						  Rd, Jaipur, Rajasthan 302017.{" "}
						  <p class="timeline-content">
							Phone: 0141 519 7777
						  </p>
						</div>
					  </TimelineEvent>
					  <TimelineEvent
						title="Relax"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="17th Dec - until 2:45 PM"
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
						  Take a stroll, say hello to your colleagues, get
						  yourself some lunch, enjoy the crisp December
						  Jaipur air
						</div>
					  </TimelineEvent>
					  <TimelineEvent
						title="Gearing up"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="17th Dec - 2:45 PM"
						subtitle="✔ The Main Conference Room"
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
						  Assemble at 2:45 PM , in the Main Conference Hall.
						  As SE's we always love to be ahead of time
						</div>
					  </TimelineEvent>
					  <TimelineEvent
						title="Day 1 Event Start"
						titleStyle={{ fontWeight: "bold" }}
						subtitle="✔ The Main Conference Room"
						subtitleStyle={{ color: "Red" }}
						createdAt="17th Dec - 3:00 PM"
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
						Marks the start of the 3 day SE Symposium -FY'19
						<TimelineBlip
						  title="SE Symposium 2018 Welcome Address"
						  icon={
							<i className="material-icons xs-18">star </i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>
						<TimelineBlip
						  title="Health Speak"
						  icon={
							<i className="material-icons xs-18">
							  local_hospital{" "}
							</i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#9c27b0" }}
						/>
						<TimelineBlip
						  title="New Employee Experiences"
						  icon={
							<i className="material-icons xs-18">tag_faces</i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#9c27b0" }}
						/>
						<TimelineBlip
						  title="Ice Breakers"
						  icon={
							<i className="material-icons xs-18">group</i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#9c27b0" }}
						/>
					  </TimelineEvent>

					  <TimelineEvent
						title="Racing ahead"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="17th Dec - 4:00 PM"
						subtitle="✔ The Main Conference Room"
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
						  title="The Time Machine - Past, Present and Future"
						  icon={
							<i className="material-icons xs-18">
							  movie_filter{" "}
							</i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>
						<TimelineBlip
						  title=" Vaibhav Gawde & Nick Jackson - Joint Keynote"
						  icon={
							<i className="material-icons xs-18">vpn_key </i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>
						<TimelineBlip
						  title="🏆 Awards"
						  icon={
							<i className="material-icons xs-18">
							  {" "}
							  plus_one{" "}
							</i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>
						<TimelineBlip
						  title=" Bala- Recuriting the right talent for Time Travel "
						  icon={
							<i className="material-icons xs-18">vpn_key </i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>
						<TimelineBlip
						  title="🏆 Awards"
						  icon={
							<i className="material-icons xs-18">
							  {" "}
							  plus_one{" "}
							</i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>
						<TimelineBlip
						  title="Mitesh Agarwal - The time is now for ULA / PULA"
						  icon={
							<i className="material-icons xs-18">
							  lightbulb_outline{" "}
							</i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>
						<TimelineBlip
						  title="🏆 Awards"
						  icon={
							<i className="material-icons xs-18">plus_one </i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>
						<TimelineBlip
						  title="Sunil Mehra - The Cloud Starts at Your Data Center "
						  icon={
							<i className="material-icons xs-18">
							  lightbulb_outline{" "}
							</i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>
						<TimelineBlip
						  title="Awards"
						  icon={
							<i className="material-icons xs-18">plus_one </i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>
					  </TimelineEvent>
					  <TimelineEvent
						title="Time travel unfolds"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="17th Dec - 5:45 PM"
						subtitle="✔ The Main Conference Room"
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
						<div />
						<TimelineBlip
						  title="Premalakshmi.R - Keep it simple with Autonomous "
						  icon={
							<i className="material-icons xs-18">
							  lightbulb_outline{" "}
							</i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>
						<TimelineBlip
						  title="🏆 Awards"
						  icon={
							<i className="material-icons xs-18">plus_one </i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>
						<TimelineBlip
						  title="Prasad Rai - A Time when PaaS for SaaS sealed deals"
						  icon={
							<i className="material-icons xs-18">
							  lightbulb_outline{" "}
							</i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>
						<TimelineBlip
						  title="Skit "
						  icon={
							<i className="material-icons xs-18">
							  event_seat{" "}
							</i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>
						<TimelineBlip
						  title=" 🏆 Awards"
						  icon={
							<i className="material-icons xs-18">plus_one </i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>
					  </TimelineEvent>
					  <TimelineEvent
						title=" The Power of Panels "
						titleStyle={{ fontWeight: "bold" }}
						createdAt="17th Dec - 6:45 PM"
						subtitle="✔ The Main Conference Room"
						subtitleStyle={{ color: "Red" }}
						icon={
						  <i className="material-icons xs-18">
							account_balance
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
						<div />
						<TimelineBlip
						  title=" Keep calm and Sell Hardware"
						  icon={
							<i className="material-icons xs-18">
							  lightbulb_outline{" "}
							</i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>
						<TimelineBlip
						  title="Awards"
						  icon={
							<i className="material-icons xs-18">plus_one </i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>
						<TimelineBlip
						  title="Marketing the Time Machine"
						  icon={
							<i className="material-icons xs-18">
							  lightbulb_outline{" "}
							</i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>
						<TimelineBlip
						  title="Anchoring and Supporting the Time machine "
						  icon={
							<i className="material-icons xs-18">
							  event_seat{" "}
							</i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>
						<TimelineBlip
						  title="Moving the ecosystem with the Time Machine"
						  icon={
							<i className="material-icons xs-18">plus_one </i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>
						<TimelineBlip
						  title="Industry helping Time Travel"
						  icon={
							<i className="material-icons xs-18">plus_one </i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>
						<TimelineBlip
						  title=" The importance of process in Time Travel"
						  icon={
							<i className="material-icons xs-18">plus_one </i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>
					  </TimelineEvent>
					  <TimelineEvent
						title=" The Final Showdown "
						titleStyle={{ fontWeight: "bold" }}
						createdAt="17th Dec - 7:45 PM"
						subtitle="✔ The Main Conference Room"
						subtitleStyle={{ color: "Red" }}
						icon={
						  <i className="material-icons xs-18">
							account_balance
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
						<div />
						<TimelineBlip
						  title=" India DC - The icing on the cake"
						  icon={
							<i className="material-icons xs-18">
							  lightbulb_outline{" "}
							</i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>
						<TimelineBlip
						  title=" 🏆 Awards"
						  icon={
							<i className="material-icons xs-18">plus_one </i>
						  }
						  iconColor="#03a9f4"
						  style={{ color: "#503331" }}
						/>
						<TimelineBlip
						  title=" 🍽️ Aren't you guys hungry yet - Dinner?"
						  icon={
							<i className="material-icons xs-18">
							  lightbulb_outline{" "}
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