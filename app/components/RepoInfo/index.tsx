import * as React from "react";
import { Grid, Col, Row} from "react-bootstrap";
import { IRepoInfo } from "../../profile/Interfaces";

var FontAwesome = require("react-fontawesome");
const styles = require("./repoInfo.less");


export interface IRepoInfoProps { repoInfo: IRepoInfo; }

class RepoInfo extends React.Component<IRepoInfoProps, null> {

	constructor(props: IRepoInfoProps) {
		super(props);
	}

    public static defaultProps: IRepoInfoProps = {
        repoInfo: {name : "", description: "", fork : false}
    };

	render(): any {
		return  <Grid className={styles.container}>
     <Row>
    <Col sm={9}>
            <Row>
                <Col sm={12}>
                <h3>{this.props.repoInfo.name}</h3>
                </Col>
            </Row>
            <Row>
            <Col sm={12}>
            {this.props.repoInfo.description}
            </Col>
            </Row>
        </Col>
        <Col sm={2}>
        <FontAwesome
        className="fa fa-code-fork"
        name="fork"
        size="2x"
        spin
        style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
         />
        </Col>
        </Row>
     </Grid>;
	}
}
export default RepoInfo;
