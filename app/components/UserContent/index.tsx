import * as React from "react";
import { connect } from "react-redux";
import { Grid, Col, Row } from "react-bootstrap";
import RepoInfo from "../RepoInfo";
import Profile from "../Profile";

const styles = require("./userContent.less");


function mapStateToProps(state: any) {
    return {
        repoList: state.main.repoList,
        userInfo: state.main.userInfo
    };
}

export interface IUserContentProps { repoList: any; userInfo: any; }

class UserContent extends React.Component<IUserContentProps, null> {

	constructor(props: IUserContentProps) {
		super(props);
	}

    public static defaultProps: IUserContentProps = {
       repoList : [],
       userInfo: {
			name : "",
			location: "",
			blog: "",
			email: "",
			public_repos: 0,
			avatar_url: ""
				  }
    };

	render(): any {
		return <Grid className={styles.contentMargin}>
                <Row>
                <Col sm={6}>
            { this.props.repoList.map(function (repo: any) {
                return (
                    <Row>
                    <Col sm={12} className={styles.repoBox}>
                        <RepoInfo  repoInfo={repo}   />
                    </Col>
                    </Row>
                        );
                    })
            }
              </Col>
                 <Col smOffset={1}  sm={5} className={styles.profileBox}>         
                   <Profile />
                 </Col>
                </Row>
            </Grid>;
	}
}
export default connect(mapStateToProps)(UserContent);
