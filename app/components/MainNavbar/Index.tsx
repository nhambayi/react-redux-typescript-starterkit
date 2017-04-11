import * as React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router";
import { connect } from "react-redux";
import Logout from "../Logout";
import { IAuthProfile } from "../../profile/Interfaces";

const styles = require("./MainNavbar.less");

export interface INavbarProps {
	  currentUserProfile: IAuthProfile;
};

export interface INavbarState {
};

function mapStateToProps(state: any) {
    return {
         currentUserProfile: state.main.authProfile,
    };
}

class MainNavbar extends React.Component<INavbarProps, INavbarState> {
	constructor(props: INavbarProps) {
		super(props);
	}

	render() {
    //check if user is loggedin
    let logoutComponent = <div/>;
    if (this.props.currentUserProfile.isLoggedIn === true){
        logoutComponent = <NavItem eventKey={1} href="#">
        <Logout />
        </NavItem> ;
    }

    return 	<Navbar inverse collapseOnSelect fluid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#"><p className={styles.brand}>React TypeScript Starter Kit</p></a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                        <NavItem><Link to="/home">Home</Link></NavItem>
                        <NavItem><Link to="/github">GitHub Browser</Link></NavItem>
                        <NavItem><Link to="/form">Sample Form</Link></NavItem>
                        <NavItem><Link to="/login">Login</Link></NavItem>
              </Nav>
              <Nav pullRight> 
                {logoutComponent}
              </Nav>
            </Navbar.Collapse>
          </Navbar>;
	}
}

export default connect(mapStateToProps)(MainNavbar);
