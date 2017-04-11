import *  as React from "react";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";
import AuthConfig from "../auth/AuthConfig";
import  App  from "../components/App";
import { Home } from "./Home";
import SampleForm from "./SampleForm";
import { GitHubSearch } from "./GitHubSearch";
import Login  from "./Login";

export interface IAppRouterProps {
	store: any;
}

const auth = new AuthConfig("1cWpF3A5IkELyczaeEId5kXYh9Bedao2", "alphio.auth0.com", null, null);

 class AppRouter extends React.Component<IAppRouterProps, undefined> {
	 	constructor(props: IAppRouterProps) {
		super(props);
	}

// validate authentication for private routes
 requireAuth(nextState: any, replace: any): any {
  if (!auth.loggedIn()) {
    replace({ pathname: "/login" });
  }
}

	render() {
		return <Provider store={ this.props.store }>
			<Router history={browserHistory}>
					<Route path="/" component={App}>
						<IndexRoute component={Home} />
						<Route path="/home" component={Home} />
						<Route path="/form" component={SampleForm} />
						<Route path="/github" component={GitHubSearch} onEnter={this.requireAuth} />
						<Route path="/login" component={Login} />
						 />		
					</Route>
			</Router>
		</Provider>;
	}
}
export default AppRouter;