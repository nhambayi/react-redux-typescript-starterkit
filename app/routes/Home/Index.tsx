import * as React from "react";
import { Grid } from "react-bootstrap";
import { Hello } from "../../components/Hello";

export interface IHomeProps { };

export class Home extends React.Component<IHomeProps, undefined> {
    public render() {
        return <Grid>
				<Hello message="React Redux with TypeScript Boilerplate">
					<h5>This is a React starter kit using webpack and TypeScript</h5>
				</Hello>
			  </Grid>;
    }
}
