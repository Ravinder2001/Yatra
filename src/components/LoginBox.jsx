/** @format */

import { useState } from "react";
import styled from "styled-components";
import "../styles.css";
import firebase from "./firebase1";
export function LoginBox({ handleChange, number, handleDisplay }) {
	function configureCaptcha() {
		window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
			"sign-in-button",
			{
				size: "invisible",
				callback: (response) => {
					// reCAPTCHA solved, allow signInWithPhoneNumber.
					console.log("Recaptca varified");
					onSignInSubmit();
				},
				defaultCountry: "IN",
			},
		);
	}
	function onSignInSubmit(e) {
		console.log("hello");
		if (number) {
			if (number.length === 10) {
				configureCaptcha();
				const phoneNumber = "+91" + number;
				console.log(phoneNumber);
				// this.setState({ phone: phoneNumber });
				const appVerifier = window.recaptchaVerifier;
				firebase
					.auth()
					.signInWithPhoneNumber(phoneNumber, appVerifier)
					.then((confirmationResult) => {
						// SMS sent. Prompt user to type the code from the message, then sign the
						// user in with confirmationResult.confirm(code).
						window.confirmationResult = confirmationResult;
						console.log("OTP has been sent");
						handleDisplay();
						// this.setState({ count: "none", count1: "block" });
						// console.log(O);
						// ...
					})
					.catch((error) => {
						console.log(error.message);
						// Error; SMS not sent
						// ...   O.push("ss")

						// this.setState({ count: "none",count1: "block"})
						console.log("SMS not sent");
						// this.setState({ error: "please try again" });
						// document.getElementById("sign-in-button").style.borderColor="green"
					});
			} else {
				console.log({ error: "enter valid number" });
				// document.getElementById("sign-in-button").style.borderColor = "red";
			}
		} else {
			console.log({ error: "enter your number number" });
			document.getElementById("sign-in-button").style.borderColor = "red";
		}
	}

	return (
		<LBox>
			<div>
				<i id='profile' className='fas fa-user-circle'></i>
				<Divisions center='center' Color='gray'>
					{number === ""
						? "EMAIL ID/PHONE NUMBER"
						: isNaN(number[0])
						? "EMAIL ID"
						: "PHONE NUMBER"}
				</Divisions>
				<Input
					id='sign-in-button'
					name={number}
					onChange={handleChange}
					type='text'
					placeholder='Phone Number'
				/>
				{/* <Button onClick={onSignInSubmit}>Continue</Button> */}
				<Button onClick={handleDisplay}>Continue</Button>
				<P>
					By proceeding, you agree with our
					<a href='https://www.yatra.com/online/terms-of-service.html'>
						Terms of Service
					</a>
					,
					<a href='https://www.yatra.com/online/privacy-policy.html'>
						{" "}
						Privacy Policy
					</a>{" "}
					&{" "}
					<a href='https://www.yatra.com/online/yatra-user-agreement.html'>
						Master User Agreement.
					</a>
				</P>
				<hr style={{ opacity: ".2" }} />
				<Buttons>
					<i
						style={{ fontSize: "20px", marginLeft: "10px" }}
						className='fab fa-facebook-square'></i>
					Sign in with Facebook
				</Buttons>
				<img
					alt='google auth'
					src='https://secure.yatra.com/content/social/images/btn_google_signin_dark_normal_web.png'
				/>
			</div>
			<div>
				<Logged>Logged In/Registered users get MORE!</Logged>

				<Divisions>
					<i className='far fa-calendar-alt' style={{ color: "#f76b38" }}></i>
					<span>
						<strong>View/ Cancel/ Reschedule</strong> bookings
					</span>
				</Divisions>

				<Divisions>
					<i className='fas fa-wallet' style={{ color: "#f76b38" }}></i>
					<span>
						Check booking <strong>history</strong>, manage{" "}
						<strong>cancellations</strong> & print <strong>eTickets</strong>
					</span>
				</Divisions>

				<Divisions>
					<i className='fas fa-edit' style={{ color: "#f76b38" }}></i>
					<span>
						Book faster with <strong>Pre-Filled Forms</strong>, saved{" "}
						<strong>Travellers</strong> & <strong>Saved Cards</strong>
					</span>
				</Divisions>

				<Divisions>
					<i className='fas fa-laptop' style={{ color: "#f76b38" }}></i>
					<span>
						Use Yatra <strong>eCash</strong> to get <strong>discounts</strong>
					</span>
				</Divisions>

				<Divisions>
					<i
						className='fas fa-comments-dollar'
						style={{ color: "#f76b38" }}></i>
					<span>
						<strong>Transfer eCash</strong> to your{" "}
						<strong>Family/Friends</strong>
					</span>
				</Divisions>

				<Divisions>
					<i className='fas fa-desktop' style={{ color: "#f76b38" }}></i>
					<span>
						<strong>Convert eCash</strong> to <strong>Shopping Coupons</strong>{" "}
						from <strong>Amazon</strong>, BookMyShow, etc.
					</span>
				</Divisions>

				<Divisions>
					<i className='fas fa-briefcase' style={{ color: "#f76b38" }}></i>
					<span>
						Do you have GST number?Additional Benefits of{" "}
						<strong>Free Meals, Low Cancellation Fee, Free Rescheduling</strong>{" "}
						for SME business customers
					</span>
				</Divisions>
			</div>
		</LBox>
	);
}

const LBox = styled.div`
	padding: 1%;
	width: 82%;
	margin: 4% auto;
	height: auto;
	display: flex;
	background: white;
	& > div {
		width: 46%;
		margin: 2%;
		height: 450px;
		border-radius: 15px;
		text-align: center;
	}
	& > div:nth-child(2) {
		background: #fef2d8;
	}
`;

const Logged = styled.div`
	margin: 0% !important;
	padding: 5%;
	background: #feeab8;
	border-top-right-radius: 15px;
	border-top-left-radius: 15px;
	font-size: 16px;
	text-align: center;
`;

const Divisions = styled.div`
	width: 80%;
	margin: 4% auto;
	text-align: ${(props) => (props.center === "center" ? "center" : "left")};
	font-size: 14px;
	color: ${(props) => (props.Color === "gray" ? "gray" : "black")};
	color: & > i {
		font-size: large;
	}
	& > span {
		margin-left: 2%;
	}
`;

const Input = styled.input`
	width: 90%;
	padding: 4%;
	outline: none;
	border: transparent;
	box-shadow: 1px 1px 3px silver;
	&::placeholder {
		color: lightgray;
	}
`;

const Button = styled.button`
	margin: 8% 0% 0% 0%;
	width: 98%;
	padding: 4%;
	color: white;
	background: #ea2330;
	font-size: 15px;
	outline: none;
	border: transparent;
	transition: ease 0.3s;
	cursor: pointer;
	&:hover {
		background: #c00100;
	}
`;

const Buttons = styled.button`
	margin: 2% 0%;
	width: 180px;
	height: 40px;
	outline: none;
	border: 1px solid rgb(59, 89, 152);
	color: rgb(59, 89, 152);
	font-size: 14px;
	cursor: pointer;
	transition: ease 0.3s;
	&:hover {
		border: 1px solid white;
		color: white;
		background: rgb(59, 89, 152);
	}
`;

export const P = styled.p`
	font-size: 12px;
	line-height: 1.8;
	text-align: left;
	& > a {
		color: blue;
		text-decoration: none;
	}
`;
