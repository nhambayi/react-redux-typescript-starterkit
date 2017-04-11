import * as React from "react";

export interface IHeaderProps { title: string; }
const styles = require("./header.less");

export const Header = (props: IHeaderProps): any => (
	<div>
	<h1 className={styles.myHeader} >{ props.title }</h1>
	</div>
);
