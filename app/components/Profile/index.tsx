import * as React from "react";
import { connect } from "react-redux";
import { Grid, Col, Row, ControlLabel, Thumbnail } from "react-bootstrap";
import { IUserInfo } from "../../profile/Interfaces";

const styles = require("./profile.less");

function mapStateToProps(state: any) {
    return {
        currentUserProfile: state.main.userInfo
    };
}

export interface IProfileProps { currentUserProfile: IUserInfo; }

 const Profile = (props: IProfileProps): any => (
 <Grid className={styles.container} >
 <Row>
    <Col sm={9}>
        <Row>
            <Col sm={12}>
            <h3>{props.currentUserProfile.name}</h3>
            </Col>
        </Row>
        <Row>
            <Col componentClass={ControlLabel} sm={6}>
            Location:
            </Col>
            <Col  className={styles.profileFormControl} sm={6}>
             {props.currentUserProfile.location}
            </Col>
        </Row>
        <Row>
            <Col  componentClass={ControlLabel} sm={6}>
            Blog Url:
            </Col>
            <Col className={styles.profileFormControl} sm={6}>
           {props.currentUserProfile.blog}
            </Col>
        </Row>
        <Row>
            <Col  componentClass={ControlLabel} sm={6}>
            Email Address:
            </Col>
            <Col  className={styles.profileFormControl} sm={6}>
            {props.currentUserProfile.email}
            </Col>
        </Row>
        <Row>
            <Col  componentClass={ControlLabel}  sm={6}>
            Number of Repos:
            </Col>
            <Col  className={styles.profileFormControl} sm={6}>
              {props.currentUserProfile.public_repos}
            </Col>
        </Row>
  </Col>

    <Col sm={3}>   
        <Thumbnail alt="171x180" src={props.currentUserProfile.avatar_url} />
    </Col>
</Row>
</Grid>

);

export default connect(mapStateToProps)(Profile);