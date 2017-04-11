import * as React from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";
import { IState } from "../../reducers/InitialState";
import * as profileActions from "../../profile";
import { IProfile } from "../../profile/Interfaces";
import { FormTextBox } from "../../components/common";

export interface ISampleFormProps {
	currentUserProfile: IProfile;
	saveProfile: (profile: IProfile) => any;
};

export interface ISampleFormState {
	username: string;
	password: string;
	firstname: string;
	lastname: string;
	emailAddress: string;
};

function mapStateToProps(state: IState) {
    return {
        currentUserProfile: state.userProfile,
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        saveProfile: (profile: IProfile) => dispatch(profileActions.saveProfile(profile)),
    };
}

class SampleForm extends React.Component<ISampleFormProps, ISampleFormState> {

	constructor(props: ISampleFormProps) {
		super(props);
		this.state = {
			firstname: "",
			lastname: "",
			username: "",
			password: "",
			emailAddress: ""
		};
	}

public onChange(event: any): void {
	this.setState({
		[event.target.name]: event.target.value
	});
}

onSubmit(event: any) {
	event.preventDefault();
	this.props.saveProfile({
			username: this.state.username,
			firstname: this.state.firstname,
			lastName: this.state.lastname
	});
}

	render() {
		return <Form onSubmit={this.onSubmit.bind(this)}> 
			<h1>Sample Form</h1>
			
			<FormTextBox name="firstname"
					label="First Name:"
					value={this.state.firstname}
					error="This feild is required."
					onChange={ e => this.onChange(e) } />

			<FormTextBox name="lastname"
					label="Last Name:"
					value={this.state.lastname}
					onChange={ e => this.onChange(e) } />

			<FormTextBox name="username"
				    label="Username:"
					value={this.state.username}
				    onChange={ e => this.onChange(e) }  />

			<FormTextBox name="password"
			    	label="Password:"
					value={this.state.password}
					masked={true}
					onChange={ e => this.onChange(e) }  />

			<div className="form-group">
				<button className="btn btn-primary btn-lg">
					Save
				</button>
			</div>
		</Form>;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleForm);
