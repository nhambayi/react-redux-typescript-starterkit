import * as React from "react";
import { DropdownButton, MenuItem } from "react-bootstrap";

import { connect } from "react-redux";
import { IState } from "../../reducers/InitialState";
import * as profileActions from "../../profile";
import { IAuthProfile, IAuthProfileSaveAction } from "../../profile/Interfaces";
import AuthConfig from "../../auth/AuthConfig";
import * as InitialState from "../../reducers/InitialState";

export interface ILogoutProps {
		currentUserProfile: IAuthProfile;
        saveProfile: (profile: IAuthProfile) => IAuthProfileSaveAction;
};

export interface ILogoutState {
};

function mapStateToProps(state: any) {
    return {
         currentUserProfile: state.main.authProfile,
    };
}

function mapDispatchToProps(dispatch: any) {
    return{
     saveProfile: (profile: IAuthProfile) => dispatch(profileActions.saveAuthProfile(profile)),
    };
}

const auth = new AuthConfig("1cWpF3A5IkELyczaeEId5kXYh9Bedao2", "alphio.auth0.com", null, this.onlogout);

class Logout extends React.Component<ILogoutProps, ILogoutState> {
	constructor(props: ILogoutProps) {
		super(props);
       this.onlogout = this.onlogout.bind(this);
	}

onlogout(profile: IAuthProfile): void{
   this.props.saveProfile(profile);
}

public onClick(event: any): void {
if (auth.loggedIn()) {
    let initialState: IState = InitialState.GetInitialState();
    this.props.saveProfile(initialState.authProfile);
    auth.logout();
  }
}

render() {
        return  <DropdownButton bsStyle={this.props.currentUserProfile.name.toLowerCase()} title={this.props.currentUserProfile.name} id={`dropdown-basic-1`}>
                 <MenuItem eventKey="1" onClick={e => this.onClick(e)}>Logout</MenuItem>
                </DropdownButton>;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
