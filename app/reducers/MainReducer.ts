import { IState } from "./InitialState";
import * as ProfileActionTypes from "../profile/ActionTypes";
import { IAction } from "../common/IAction";
import * as InitialState from "./InitialState";

const initialState: IState = InitialState.GetInitialState();

export default function MainReducer(state = initialState, action: IAction): IState {
	switch (action.type) {

		case ProfileActionTypes.CREATE_PROFILE_ACTION:
			return state;

		case ProfileActionTypes.UPDATE_PROFILE_ACTION:
			return state;

		case ProfileActionTypes.GET_USER_ACTION:
			 return {
				 ...state, user: action.payload,
				};

		case ProfileActionTypes.GET_USERINFO_ACTION:
		var githubProfileState = {
			...state, userInfo: action.payload,
		};
		return githubProfileState;

		case ProfileActionTypes.GET_REPOINFO_ACTION:
		var repoState = {
			...state, repoList: action.payload,
		};
		return repoState;

		case ProfileActionTypes.SET_AUTHPROFILE_ACTION:
		var authProfileState = {
			...state, authProfile: action.payload,
		};
		return authProfileState;

		default:
		return state;
	}
};
