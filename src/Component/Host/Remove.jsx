import React from "react";

export default class Remove extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<>
				<div onClick={this.props.Bhome} style={{ position: "fixed", top: 0, left: 0, right: 0, height: "100%", zIndex: 2, background: "#000000ad" }} />
			</>
		);
	}
}
