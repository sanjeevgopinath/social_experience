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
						<p>Cycling</p>
						<p>Heritage Walk</p>
						<p>Golden Temple</p>						  
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
            </div>

        );
    }
}

export default eventInfo