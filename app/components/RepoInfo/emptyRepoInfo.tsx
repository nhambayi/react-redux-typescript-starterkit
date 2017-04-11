import * as React from "react";
import { connect } from "react-redux";
import { Jumbotron, Grid, Col, Row, Form, FormGroup, FormControl, ControlLabel, Button } from "react-bootstrap";
import { IRepoInfo } from "../../profile/Interfaces";

var FontAwesome = require('react-fontawesome');

const styles = require("./repoInfo.less");


export interface IRepoInfoProps { }

class EmptyRepoInfo extends React.Component<IRepoInfoProps, null> {

	constructor(props: IRepoInfoProps) {
		super(props);
	}

    public static defaultProps: IRepoInfoProps = {
       
    };

	render() : any {
		return  <Grid className={styles.container}>
     <Row>
    <Col sm={9}>
            <Row>
                <Col sm={12}>
                <h3></h3>
                </Col>
            </Row>
            <Row>
            <Col sm={12}>
          
            </Col>
            </Row>
        </Col>
        <Col sm={2}>
        </Col>
        </Row>
     </Grid>
	}
}

export default EmptyRepoInfo;