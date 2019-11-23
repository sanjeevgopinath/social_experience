import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Timeline, TimelineEvent, TimelineBlip} from 'react-event-timeline';


import Collapsible from 'react-collapsible';


import './eventInfo.css';

class eventInfo extends Component {
		
	state = {
    isOpen1: false,
    isOpen2: false,
    isOpen3: false,
    spy3: {}
  };
	
	render() {
        return(
            <div class="eventinfo">
                <h3>Event Information</h3>

								<Collapsible trigger="Day 1 - Monday    - 2nd December, 2019" className="day1" contentInnerClassName="day1" triggerOpenedClassName="day1" transitionTime="100">
        					
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
						<p class="timeline-content">Plot No. C-3, Outer Circular Road, Opp. Basant Avenue , Amritsar , 143001.</p>
						<p class="timeline-content">
							Phone: +91 0183-6658000
						  </p>
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
						<p class="timeline-content">Take a stroll, Relax, Say hello to your colleagues, Make some new Friends and Enjoy some Amritsari Kulchas !</p>
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
						<div class="timeline-content">
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
							</Collapsible>

								
<Collapsible trigger="Day 2 - Tuesday   - 3rd December, 2019" className="day2" contentInnerClassName="day2" triggerOpenedClassName="day2" transitionTime="100">
								<Timeline lineColor="black">
					  <TimelineEvent
						title="Good Morning Amritsar ! - Morning Activities"
						titleStyle={{ fontWeight: "bold" }}
						subtitle="Registration Required"
						subtitleStyle={{ color: "Red" }}
						createdAt="3rd Dec - 6 AM"
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
						<p class="timeline-content">Cycling</p>
						<p class="timeline-content">Heritage Walk</p>
						<p class="timeline-content">Golden Temple</p>						  
						</div>	
					  </TimelineEvent>
					  <TimelineEvent
						title="Let's have some Breakfast !"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="3rd December, 2019 - 7:30 AM - 9 AM"
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
						createdAt="3rd Dec - 9 AM - 10:30 AM"
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
						  title="Converged Data Management & Latest Trends - Shailendra Mishra"
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
						title="Learning By Experience"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="3rd Dec - 10:30 AM - 11 AM"
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
						  title="End-to-End Data Management - Prashant Dagar"
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
						createdAt="3rd Dec -11 AM - 11:15 AM"
						
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
						createdAt="3rd Dec - 11:15 AM - 12:15 PM"
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
						  title="Autonomous Magic Show - Datthathiri Srinivasan and Vishal Savji"
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
						title="Learning By Experience"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="3rd Dec - 12:15 PM - 12:35 PM"
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
						  title="ADW for India’s Aspirational Districts (Niti Aayog Case Study) - Nishant Rathi and Kavindra Singh"
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
						createdAt="3rd Dec - 12:35 PM - 1 PM"
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
						  title="Real Time Fraud Detection - Sibendu Das"
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
						title="Aren't You Guys Hungry ?"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="3rd Dec - 1 PM - 1:45 PM"
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
						title="Thought Leadership Session"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="3rd Dec - 1:45 PM - 2:45 PM"
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
						  title="Dissecting a Large Scale Lift and Shift Opportunity - Sudershan Singh and Sanjeev Gopinath"
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
						createdAt="3rd Dec - 2:45 PM - 3:15 PM"
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
						  title="OCI Deployment - Nitin Kaushik and Krishnan Kumar"
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
						createdAt="3rd Dec - 3:15 PM - 4 PM"
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
						  title="Serverless and FaaS - Karan Kapoor"
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
						createdAt="3rd Dec - 4 PM - 4:30 PM"
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
						  title="Digital Assistant Deployments in Banking (AU Fin & OBC Case Study) - Satender Qazi"
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
						title="Chai Biscuit Break"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="3rd Dec - 4:30 PM - 5 PM"
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
						createdAt="3rd Dec - 5 PM - 5:10 PM"
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
						  title="Welcome to FY 20 SE Symposium - Vaibhav Gawde and Suryanarayan Iyer"
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
						createdAt="3rd Dec - 5:10 PM - 5:15 PM"
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
						  title="Video Message from Roger Li"
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
						createdAt="3rd Dec - 5:15 PM - 5:30 PM"
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
						  title="Solution Engineering 2.0 - Nick Jackson"
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
						createdAt="3rd Dec - 5:30 PM - 5:45 PM"
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
						  title="Cloud Platform FY 20 Priorities - Sunil Mehra"
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
						createdAt="3rd Dec - 5:45 PM - 6 PM"
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
						  title="Cloud Platform FY 20 Priorities - Sriram Rajan"
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
						createdAt="3rd Dec - 6 PM - 6:15 PM"
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
						  title="Applications - FY 20 Priorities - Sathya Prasad Rai"
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
						createdAt="3rd Dec - 6:15 PM - 6:30 PM"
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
						  title="Systems - FY 20 Priorities - Subhash Guddad and Srikanth Doranadula"
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
						createdAt="3rd Dec - 6:30 PM - 6:40 PM"
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
						  title="Marketing - FY 20 Priorities - Geetu Bhatnagar"
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
						createdAt="3rd Dec - 6:40 PM - 6:50 PM"
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
						  title="Video Message from Mitesh Agarwal & Other Executives"
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
						createdAt="3rd Dec - 6:50 PM - 7 PM"
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
						  title="HR in Digital Age - Balachandar Gurumurthy"
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
						title="Panel Discussion"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="3rd Dec - 7 PM - 7:15 PM"
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
						  title="Discussion with Kanwar Singh, Atul Kaushik, Debapriya Nandan - Vaibhav Gawde"
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
						title="Panel Discussion"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="3rd Dec - 7:15 PM - 7:30 PM"
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
						  title="Discussion with Mukund Moorthy, Sanjoy Mukherjee, Aditya Bhattacharyya - Vaibhav Gawde"
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
						title="Regional Managing Director Message"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="3rd Dec - 7:30 PM - 8 PM"
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
						  title="Yaran Da Tashan - Shailender Kumar"
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
						title="Networking - Hic !"
						titleStyle={{ fontWeight: "bold" }}
						createdAt="3rd Dec - 8 PM - 11 PM"
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
						  title="Cocktails and Dinner, DJ !"
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
					</Collapsible>
								
								<Collapsible trigger="Day 3 - Wednesday - 4th December, 2019" className="day3" contentInnerClassName="day3" triggerOpenedClassName="day3" transitionTime="100">
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
						<p class="timeline-content">Cycling</p>
						<p class="timeline-content">Heritage Walk</p>
						<p class="timeline-content">Golden Temple</p>						  
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
					</Collapsible>
							
								<Collapsible trigger="Day 4 - Thursday - 5th December, 2019" className="day4" contentInnerClassName="day4" triggerOpenedClassName="day4" transitionTime="100">			
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

      					</Collapsible>

								
            </div>

        );
    }
}

export default eventInfo