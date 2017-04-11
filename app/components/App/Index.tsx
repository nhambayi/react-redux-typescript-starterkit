import * as React from "react";
import { Grid, Row } from "react-bootstrap";
import  MainNavbar  from "../MainNavbar";
import { connect } from "react-redux";
import AuthConfig from "../../auth/AuthConfig";
import { IAuthProfile, IAuthProfileSaveAction } from "../../profile/Interfaces";
import * as profileActions from "../../profile";

export interface IAppProps {
	children?: any;
	saveProfile: (profile: IAuthProfile) => IAuthProfileSaveAction;
 };


const auth = new AuthConfig("1cWpF3A5IkELyczaeEId5kXYh9Bedao2", "alphio.auth0.com", null, null);


function mapStateToProps(state: any) {
    return {
    };
}

function mapDispatchToProps(dispatch: any) {
    return{
     saveProfile: (profile: IAuthProfile) => dispatch(profileActions.saveAuthProfile(profile)),
    };
}

 class App extends React.Component<IAppProps, undefined> {

//call auth0 login onload of this component
componentDidMount(){
	if (auth.loggedIn()) {
	let profile: IAuthProfile = auth.getProfile();
	profile.isLoggedIn = true;
	this.props.saveProfile(profile);
  }
}
   public render() {
    return <div>
			<MainNavbar />
			 <Grid>
				  <Row>
				      {this.props.children}
				  </Row>
			</Grid>
		</div>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
