import React from "react";

const FakeDiv = (props) => {
	return (
		<div style={props.style} className={props.className}>
			{props.children}
		</div>
	);
};
export default FakeDiv;
