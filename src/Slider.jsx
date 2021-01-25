import React, { useState } from "react";

const Slider = (props) => {
	const [color, setColor] = useState(255);

	return (
		<>
			{props.label}
			<input
				type="range"
				min="0"
				max="255"
				step="1"
				value={color}
				onChange={(e) => {
					setColor(e.target.value);
					props.set(e.target.value);
				}}
			/>
			{color}
		</>
	);
};

export default Slider;
