import { IProfile, IUser, IRepoInfo } from "../profile/Interfaces";

export interface IState {
	userProfile: IProfile;
	user: IUser;
	userInfo: any;
	repoList: any;
	repoInfo: IRepoInfo;
	authProfile: any;
};

export const GetInitialState = (): IState => {
	return {
		userProfile: null,
		user: null,
		userInfo: {
			name : "",
			location: "",
			blog: "",
			email: "",
			public_repos: 0,
			avatar_url: ""
				  },
		repoList: [],
		repoInfo: {
				  name : "" ,
				  fork : false,
				  description: "",
				 },
		authProfile: {
			name : "",
			email: "",
			isLoggedIn : false
		}
	};
};
