import * as React from "react";
import { connect } from "react-redux";
import { IState } from "../../reducers/InitialState";
import { Jumbotron, Grid, Col, Row, Form, FormGroup, FormControl, ControlLabel, Button, Thumbnail } from "react-bootstrap";

const styles = require("./profile.less");
const thumbnail = require("./thumbnail.png");


export interface IProfileProps { }

 const EmptyProfile = (props: IProfileProps): any => (
 <Grid className={styles.container} >
 <Row>
    <Col sm={9}>
        <Row>
            <Col sm={12}>
            <h3></h3>
            </Col>
        </Row>
        <Row>
            <Col componentClass={ControlLabel} sm={6}>
            Location:
            </Col>
            <Col  className={styles.profileFormControl} sm={6}>
            
            </Col>
        </Row>
        <Row>
            <Col  componentClass={ControlLabel} sm={6}>
            Blog Url:
            </Col>
            <Col className={styles.profileFormControl} sm={6}>
          
            </Col>
        </Row>
        <Row>
            <Col  componentClass={ControlLabel} sm={6}>
            Email Address:
            </Col>
            <Col  className={styles.profileFormControl} sm={6}>
           
            </Col>
        </Row>
        <Row>
            <Col  componentClass={ControlLabel}  sm={6}>
            Number of Repos:
            </Col>
            <Col  className={styles.profileFormControl} sm={6}>
            
            </Col>
        </Row>
  </Col>

    <Col sm={3}>    
      <Thumbnail alt="171x180" src={thumbnail} />
    </Col>
</Row>
</Grid>

);

export default EmptyProfile;