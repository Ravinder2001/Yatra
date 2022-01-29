import { useEffect, useState } from "react";
import styled from "styled-components";

export function OtpCheck({ display, handleDisplay, Number, handleSignup }) {
  const [counter, setCounter] = useState(60);
  const [otp, setOtp] = useState("");
	function handle(e) {
		setOtp(e.target.value);
	}
	console.log(otp);
	useEffect(() => {
		const id = setInterval(() => {
			setCounter((p) => {
				if (p === 1) {
					clearInterval(id);
					return 0;
				}
				return p - 1;
			});
		}, 1000);
	}, []);
	function onSubmitOTP(e) {
		e.preventDefault();

		const code = otp;
		console.log(code);
		window.confirmationResult
			.confirm(code)
			.then((result) => {
				// User signed in successfully.
				const user = result.user;
				console.log(JSON.stringify(user));
				console.log("User is verified");
				handleSignup();
				// this.setState({set:true})
				// ...
			})
			.catch((error) => {
				// User couldn't sign in (bad verification code?)
				// ...
				console.log(error.message);
				// document.getElementById("otp").style.borderColor="red"
				// alert("wrong otp")
			});
	}
	return (
		<OtpWindow disp={display}>
			<LayoutOtp>
				<Head>Verify Your Mobile Number</Head>
				<Arrow>
					<i onClick={handleDisplay} className='fas fa-arrow-left'></i>
				</Arrow>
				<Mobile>
					<i className='fas fa-mobile-alt'></i>
				</Mobile>
				<div>
					An OTP (valid for next 15 mins.) has been sent to you on your Mobile
					number
				</div>
				<div>
					<strong>+91 {Number}</strong>
				</div>
				<div>Enter Mobile OTP</div>
				<input type='tel' maxLength='6' onChange={handle} />
				<button onClick={handleSignup}>Submit</button>
				{/* <button onClick={onSubmitOTP}>Submit</button> */}
				<div>Resend OTP ({counter} Seconds)</div>
			</LayoutOtp>
		</OtpWindow>
	);
}

const OtpWindow = styled.div`
  display: ${(prop) => (prop.disp ? "block" : "none")};
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

const LayoutOtp = styled.div`
  position: absolute;
  left: 36%;
  width: 29%;
  margin: 1% auto;
  height: 510px;
  background: white;
  text-align: center;

  & > div:nth-child(4),
  div:nth-child(8) {
    width: 90%;
    color: gray;
    margin: 2% auto;
    font-size: 14px;
  }
  & > div:nth-child(5) {
    margin: 6%;
  }
  & > div:nth-child(6) {
    margin: 1%;
    color: gray;
    font-size: small;
  }
  & > input {
    width: 50%;
    height: 10%;
    outline: none;
    border: transparent;
    border-bottom: 3px solid red;
    letter-spacing: 19px;
    font-size: x-large;
  }
  & > button {
    margin: 3% auto;
    width: 90%;
    height: 40px;
    border: transparent;
    color: white;
    background: #ea2330;
    transition: ease 0.3s;
    cursor: pointer;
  }
  & > button:hover {
    background: #c00100;
  }
`;

const Head = styled.div`
  text-align: center;
  padding: 5%;
`;

export const Arrow = styled.div`
  text-align: left;

  margin: auto;
  font-size: 18px;
  font-weight: 300;
  width: 90%;
  & > i {
    cursor: pointer;
  }
`;

const Mobile = styled.div`
  margin: auto;
  width: 8vw;
  height: 8vw;
  border-radius: 10vh;
  border: 2px solid black;
  opacity: 0.2;
  & > i {
    padding: 20% 30%;
    font-size: 5vw;
  }
`;
