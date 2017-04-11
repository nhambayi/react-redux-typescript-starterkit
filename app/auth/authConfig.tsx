import *  as React from "react";
import Auth0Lock from "auth0-lock";
import { browserHistory } from "react-router";
import { IAuthProfile } from "../profile/Interfaces";

export interface IAuthProps {
	lock: any;
    cliendId: any;
    domain: any;
    saveProfile: (profile: IAuthProfile) => any;
};

class AuthConfig extends React.Component<IAuthProps, undefined> {
    lock: any;
    onlogin: (profile: IAuthProfile) => void;

  constructor(clientId: any,
             domain: any ,
            onlogin: (profile: IAuthProfile) => void,
            onlogout: (profile: IAuthProfile) => void) {
      super(clientId, domain);
    // Configure Auth0
     this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: "http://localhost:3000/login",
        responseType: "token"
      }
    });

    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", this._doAuthentication.bind(this));
    // binds login functions to keep this context
    this.login = this.login.bind(this);
    this.onlogin = onlogin;
  }

  _doAuthentication(authResult: any) {
    // Saves the user token
    this.setToken(authResult.idToken);

    // Async loads the user profile data
    this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
      if (error) {
        console.log("Error loading the Profile", error);
      } else {
        this.setProfile(profile);
      }
    });

    // navigate to the home route
    browserHistory.replace("/github");
  }

  //saves profile to localstorage and to state
   setProfile(profile: any) {
    localStorage.setItem("profile", JSON.stringify(profile));
    if (this.onlogin !== null){
    this.onlogin({
			name: profile.name,
			email: profile.email,
      isLoggedIn : true
	});
    }
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    return !!this.getToken();
  }

  setToken(idToken: any) {
    // Saves user token to local storage
    localStorage.setItem("id_token", idToken);
  }

  getToken() {
    // Retrieves the user token from local storage
    return localStorage.getItem("id_token");
  }

//get auth0 profile from localstorage
getProfile(){
  let profile: IAuthProfile = JSON.parse(localStorage.getItem("profile"));
   return  profile;
}

  logout() {
    // Clear user token and profile data from local storage
    localStorage.removeItem("id_token");
     // navigate to the home route
    browserHistory.replace("/home");
  }
}

export default AuthConfig;