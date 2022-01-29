/** @format */

/** @format */

import { useState } from "react";
import styled from "styled-components";

export function Success() {
	const [loading, setLoading] = useState(false);
	setTimeout(() => {
		window.location.href = "/";
	}, 5000);
	setTimeout(() => {
		setLoading(true);
	}, 3000);
	return (
		<Div>
			<SuccessLay>
				{loading ? (
					<>
						<Image>
							<img
								alt='Loading'
								src='https://cdn.dribbble.com/users/147386/screenshots/5315437/success-tick-dribbble.gif'
							/>
						</Image>
						<Text>Payment successful!</Text>
					</>
				) : (
					<>
						<Image>
							<img
								alt='Loading'
								src='https://i.pinimg.com/originals/43/3b/6c/433b6c5336c72a21bcfd9db8d831562a.gif'
							/>
						</Image>
						<Text>Please Wait... Processing Payment</Text>
					</>
				)}
			</SuccessLay>
		</Div>
	);
}

const SuccessLay = styled.div`
	width: 40%;
	margin: auto;
	margin-top: 12vw;
	background: white;
`;

const Image = styled.div`
	width: 40%;
	margin: auto;
	& > img {
		width: 100%;
	}
`;

const Text = styled.div`
	font-family: "Open Sans", sans-serif;
	text-align: center;
`;

const Div = styled.div`
	position:fixed;
	width:100%;
	height:100%;
	background:white;
`;