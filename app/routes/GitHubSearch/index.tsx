import * as React from "react";
import { Grid, Col , Row} from "react-bootstrap";

import {Header} from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import UserContent from "../../components/UserContent";

export interface IGitHubSearchProps {  }

export const GitHubSearch = (props: IGitHubSearchProps): any => (

        <Grid>
          <Row>
            <Col sm={12}>
            <Header title={"GitHub Search"} />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
            <SearchBar />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
            <UserContent />
            </Col>
          </Row>
        </Grid>
);
