/** @format */

import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
	width: 62%;
	background: white;
	border: 1px solid rgb(161, 161, 161);
	border-left: none;
	margin-bottom: 2%;

	p {
		font-size: 13px;
		color: gray;
		text-align: left;
		margin-left: 17%;
	}
	input {
		height: 35px;
		width: 30%;
		display: flex;
		margin-left: 17%;
		margin-bottom: 3%;
	}

	div {
		display: flex;
		gap: 6%;
	}
	div > p {
		font-size: 18px;
		color: Black;
		font-weight: 600;
	}
	button {
		margin-top: 10px;
		margin-bottom: 10px;
		background: red;
		border: none;
		padding: 0px 30px;
		font-size: large;
		color: white;
		cursor: pointer;
	}
`;
const LinkStyle = {
	textDecoration: "none",
	color: "white",
	background: "red",
	padding: "13px 10px 10px 10px",
	fontSize: "larger",
	marginBottom: "1%",
	justifyContent: "center",
};

function UPI() {
	var details = JSON.parse(localStorage.getItem("Details"));
	return (
		<Div>
			<img
				alt=''
				src='https://blogger.googleusercontent.com/img/a/AVvXsEhwUbnOS0ojMLk3SGr8n_nN2blFheq3duZRce1IJ6OlSApPO1Ae_drP0kQ8B2_4UA1XFnFocev61HAB-Ux0wFDIo9LX7rWUmx5eKwl0SlFVl-qugxdiqKKukccOvpbc39D_9CpzCGkhAl0_z_gPz7Gij12veZZc-uQ9WDcjDWBFYZM47fS67BwI6PMl1w=w696-h367'></img>
			<p>Virtual Payments Address</p>
			<input type='text' />
			<div>
				<p>₹ {details.price + 300}</p>
				<Link to='/success' style={LinkStyle}>
					Pay Now
				</Link>
			</div>
		</Div>
	);
}
export { UPI };
