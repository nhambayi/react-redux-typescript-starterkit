import axios from "axios";
import * as ProfileActionTypes from "./ActionTypes";
import { IProfile, IAuthProfileSaveAction } from "./Interfaces";

// calling dummy Api
export function saveProfile(profile: IProfile): any {
	return (dispatch: any) : any => {
		axios.post("http://localhost:3004/profile", {
		firstname: profile.firstname,
		lastname: profile.lastName,
		username: profile.username
  		})
		.then((response) => {
			dispatch({
			type: ProfileActionTypes.CREATE_PROFILE_ACTION,
			profile: profile
			});
		});
	};
};

//save searched name in github to state
export function searchUser(username: string): any {
	return (dispatch: any) : any => {
		axios.get(`https://api.github.com/users/${username}`)
			.then((response) => {
				dispatch({
				type: ProfileActionTypes.GET_USERINFO_ACTION,
				payload: response.data
				});
				//get repositories
				axios.get(`${response.data.repos_url}`)
				.then((response) => {
							dispatch({
								type: ProfileActionTypes.GET_REPOINFO_ACTION,
								payload: response.data
					});
				});
			});
		};
};

//save repolist to state
export function getRepos(repoUrl: string): any{
	 return (dispatch: any) : any => {
		axios.get(repoUrl)
			 .then((response) => {
						dispatch({
							type: ProfileActionTypes.GET_REPOINFO_ACTION,
							payload: response.data
						});
			});
		 };
};

//save auth0 profile to state
export function saveAuthProfile(profile: any): IAuthProfileSaveAction {
	return {
		type: ProfileActionTypes.SET_AUTHPROFILE_ACTION,
		payload: profile
	};
};
