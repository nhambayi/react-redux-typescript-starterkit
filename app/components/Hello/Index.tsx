import * as React from "react";
import { Jumbotron, Grid, Col } from "react-bootstrap";

const styles = require("./hello.less");
const webpackLogo = require("./webpack-logo.svg");
const tslogo = require("./typescript-logo.svg");
const reactlogo = require("./react-logo.svg");
const reduxlogo = require("./redux-logo.svg");

export interface IHelloProps { message: string; children?: any; }

export const Hello = (props: IHelloProps): any => (
	<Jumbotron>
		<Grid>
				<Col xs={6} md={3}><img className={styles.logo} src={reactlogo} /></Col>
				<Col xs={6} md={3}><img className={styles.logo} src={reduxlogo} /></Col>
				<Col xs={6} md={3}><img className={styles.logo} src={tslogo} /></Col>
				<Col xs={6} md={3}><img className={styles.logo} src={webpackLogo} /></Col>
			</Grid>
			<h2 className={styles.headerText}>{props.message}</h2>
			<div className={styles.subHeading}>{props.children}</div>
		</Jumbotron>
);
