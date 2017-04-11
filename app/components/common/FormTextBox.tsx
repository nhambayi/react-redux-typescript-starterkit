import * as React from "react";
import * as classnames from "classnames";

export interface IFormTextBoxProps {
	label: string;
	name: string;
	value: string;
	masked?: boolean;
	error?: string;
	onChange(event: any): void;
};

export const FormTextBox = (props: IFormTextBoxProps) => (
	<div className={ classnames("form-group", { "has-error": (props.error !== null)} ) }>
			<label className="control-label">{props.label}</label>
				<input type={props.masked ? "password" : "text"}
											name={props.name}
											value={props.value}
											onChange={props.onChange}
											className="form-control" />
				<span className="help-block">{props.error}</span>
		</div>
);
