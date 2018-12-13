import { config } from './config.js';

export const authService = {
    api_server: config.api_server,
    path_authenticate: 'users/authenticate',
    
    isAuthenticated() {
      if(localStorage.getItem("token")) {
        return true;
      }
      return false;
    },
    
    handleResponseErrors(response) {
      if(response.firstname && response.token) {
          localStorage.setItem("firstname", response.firstname);
          localStorage.setItem("token", response.token);
          return response;
      }
      else {
          throw Error(response);
      }
    },
    
    authenticate(username, password) {
      var payload = JSON.stringify({
        "username": username,
        "password": password,
      });
      return fetch(authService.api_server + authService.path_authenticate, {
        method: 'POST',
        mode: "cors",
        headers: {
            "Content-Type": "application/json; charset=utf-8",    
        },
        body: payload,
      })
      .then(response => response.json())
      .then(authService.handleResponseErrors)
      .catch(error => {
          throw Error(error);
      });
    },

    signout(cb) {
      localStorage.clear();
    },

};