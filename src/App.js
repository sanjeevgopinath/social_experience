import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

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

class App extends Component {
  render() {
    return (
      <div class="App">
        <Header />
        <Main />
        <Footer />
      </div>
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
        
        <Route path='/Login' component={Login}/>
      </Switch>
  </main>
)

export default App;
