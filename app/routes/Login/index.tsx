import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { IState } from "../../reducers/InitialState";
import * as profileActions from "../../profile";
import { ILogin, IAuthProfile, IAuthProfileSaveAction } from "../../profile/Interfaces";
import AuthConfig from "../../auth/AuthConfig";

export interface ILoginProps {
	currentUserProfile: ILogin;
	saveProfile: (profile: IAuthProfile) => IAuthProfileSaveAction;
    location: any;
    auth: AuthConfig;
};

export interface ILoginState {
};

function mapStateToProps(state: IState) {
    return {
    };
}

function mapDispatchToProps(dispatch: Dispatch<IAuthProfileSaveAction>) {
    return{
     saveProfile: (profile: IAuthProfile) => dispatch(profileActions.saveAuthProfile(profile)),
    };
}

class Login extends React.Component<ILoginProps, ILoginState> {
	constructor(props: ILoginProps) {
		super(props);
        this.onlogin = this.onlogin.bind(this);
	}

//on load of the component open auth0 login
componentWillMount(){
    const auth = new AuthConfig("1cWpF3A5IkELyczaeEId5kXYh9Bedao2", "alphio.auth0.com", this.onlogin, null);
    if (!auth.loggedIn()) {
	    auth.login();
    }
}

//on login call action to save profile to state
onlogin(profile: IAuthProfile): void{
   this.props.saveProfile(profile);
}

	render() {
		return <div/>;
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
