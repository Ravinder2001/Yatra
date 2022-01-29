import { useState } from "react";
import { Header } from "./Header";
import { Body } from "./Body";
import { OtpCheck } from "./OtpCheck";

export function SignIn() {
	const [display, setDisplay] = useState(false);
	const [number, setNumber] = useState("");
	const [signup, setSignup] = useState(false);

	const handleSignup = () => {
		setDisplay(false);
		setSignup(!signup);
	};

	const handleChange = ({ target }) => {
		setNumber(target.value);
	};

	const handleDisplay = () => {
		setDisplay(!display);
	};
	return (
		<div>
			<OtpCheck
				number={number}
				display={display}
				handleDisplay={handleDisplay}
				handleSignup={handleSignup}
			/>
			<Header />
			<Body
				display={display}
				handleDisplay={handleDisplay}
				handleChange={handleChange}
				handleSignup={handleSignup}
				number={number}
				signup={signup}
			/>
		</div>
	);
}
