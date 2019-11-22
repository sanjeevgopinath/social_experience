import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import appDevLinks from './appDevLinks';
import Header from './Header.js';
import Footer from './Footer.js';
import execMessage from './execMessage.js';
import eventInfo from './eventInfo.js';
import newsfeed from './newsfeed.js';
import livePoll from './livePoll.js';
import profileInfo from './profileInfo.js';
import meetFriends from './meetFriends.js';
import Login from './Login.js';
import puzzly from './puzzly.js';
import postForm from './postForm.js';
import { PrivateRoute } from './PrivateRoute.js'
import resetPassword from './resetPassword.js';
import cityTour from './cityTour.js';
import morningActivities from './morningActivities';
import ApolloClient from 'apollo-boost';
import { config } from './config';
import { ApolloProvider } from '@apollo/react-hooks';

const queryclient = new ApolloClient({
    uri: config.graphQLEndPoint,
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={queryclient}>
        <div class="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </ApolloProvider>
    );
  }
}

const Main = () => (
  <main>
      <Switch>
        <PrivateRoute exact path='/' component={execMessage}/>
        <PrivateRoute exact path='/execMessage' component={execMessage}/>
        <PrivateRoute exact path='/newsfeed' component={newsfeed}/>
        <PrivateRoute exact path='/livePoll' component={livePoll}/>
        <PrivateRoute exact path='/meetFriends' component={meetFriends}/>
        <PrivateRoute exact path='/profileInfo' component={profileInfo}/>
        <PrivateRoute exact path='/puzzly' component={puzzly}/>
        <PrivateRoute exact path='/eventInfo' component={eventInfo}/>
        <PrivateRoute exact path='/postForm' component={postForm} />
        <PrivateRoute exact path='/resetPassword' component={resetPassword} />
        <PrivateRoute exact path='/cityTour' component={cityTour} />
        <PrivateRoute exact path='/morningActivities' component={morningActivities} />
        <PrivateRoute exact path='/appDevLinks' component={appDevLinks} />
        <Route path='/Login' component={Login}/>
      </Switch>
  </main>
)

export default App;
