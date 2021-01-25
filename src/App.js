import "./App.css";
import Slider from "./Slider";
import FakeDiv from "./FakeDiv";
import { useState } from "react";

function App() {
	const [red, setRed] = useState(255); //red
	const [green, setGreen] = useState(255); //green
	const [blue, setBlue] = useState(255); //blue
	const appStyle = { backgroundColor: `rgb(${red},${green},${blue})` };
	return (
		<FakeDiv className="fakey-body" style={appStyle}>
			<Slider color={red} set={setRed} label="R:" />
			<br />
			<Slider color={green} set={setGreen} label="G:" />
			<br />
			<Slider color={blue} set={setBlue} label="B:" />
		</FakeDiv>
	);
}

export default App;
