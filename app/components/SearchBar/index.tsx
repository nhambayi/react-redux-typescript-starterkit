import * as React from "react";
import { Grid, Col, Form, FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { IState } from "../../reducers/InitialState";
import * as profileActions from "../../profile";
import { IUser } from "../../profile/Interfaces";

const styles = require("./searchBar.less");

export interface ISearchBarProps {
	currentUserProfile: IUser;
	searchUser: (user: string) => any;
};

export interface ISearchBarState {
	username: string;
};

function mapStateToProps(state: IState) {
    return {
        currentUserProfile: state.user
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        searchUser: (user: string) => dispatch(profileActions.searchUser(user)),
    };
}

class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {

	constructor(props: ISearchBarProps) {
		super(props);
		this.state = {
			username: ""
	    };
    }

public onChange(event: any): void {
	this.setState({
		[event.target.name]: event.target.value
	});
}

onSubmit(event: any) {
	event.preventDefault();
	this.props.searchUser(this.state.username);
}

	render() {
	return <Grid className={styles.headerSeparator}>
    <Form horizontal onSubmit={(this.onSubmit.bind(this))}>
        <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} smOffset={1} sm={2}>
            Username:
        </Col>
        <Col sm={4}>
            <FormControl type="text" placeholder="GitHub Username"
                         value={this.state.username}
                         name="username"
                         onChange={ e => this.onChange(e) } />
        </Col>
        <Col sm={1}>
            <Button type="submit">
            Search
            </Button>
        </Col>
        <Col  sm={1}>
            <Button >
            Clear
            </Button>
        </Col>
        </FormGroup>
    </ Form>
  </Grid>;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
