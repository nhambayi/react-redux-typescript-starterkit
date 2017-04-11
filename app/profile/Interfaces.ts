export interface IProfile {
	username: string;
	firstname: string;
	lastName: string;
}

export interface IProfileSaveAction {
	type: string;
	profile: IProfile;
}

export interface IUser {
	username: string;
}

export interface IUserSearchAction{
	type: string;
	payload: IUser;
}

export interface IUserInfo {
	name: string;
	blog: string;
	avatar_url: string;
	public_repos: string;
	location: string;
	email: string;
}

export interface IUserInfoAction{
	type: string;
	payload: IUser;
}


export interface IRepoInfo {
	name: string;
	description: string;
	fork: boolean;
}

export interface IRepoInfoAction{
	type: string;
	payload: IRepoInfo;
}

export interface ILogin {
	username: string;
	password: string;
}

export interface ILoginAction {
	type: string;
	profile: ILogin;
}

export interface IAuthProfile {
	name: string;
	email: string;
	isLoggedIn: boolean;
}

export interface IAuthProfileSaveAction {
	type: string;
	payload: IAuthProfile;
}
