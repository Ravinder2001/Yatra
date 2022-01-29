/** @format */

import styled from "styled-components";
import { Arrow } from "./OtpCheck";
import { P } from "./LoginBox";
import { nanoid } from "nanoid";
import { useState } from "react";

export function SignupBox({ number }) {
	const [data, setData] = useState({});

	const handleChange = ({ target }) => {
		const { name, value, type, checked } = target;
		setData({ ...data, [name]: type === "checkbox" ? checked : value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		let { email, password, title, fname, lname, promo, notify } = data;
		let detail = {
			id: nanoid(4),
			email: email,
			password: password,
			title: title,
			fname: fname,
			lname: lname,
			promo: promo,
			notify: notify,
			login: true,
		};
		localStorage.setItem("signIn", JSON.stringify(detail));
		window.location.href = "/";
	};
	return (
		<LBox>
			<div>
				<Arrow style={{ marginLeft: "0px", marginBottom: "12px" }}>
					<i className='fas fa-arrow-left'></i>
				</Arrow>
				<Form onSubmit={handleSubmit}>
					<label>MOBILE NUMBER</label>
					<Input onChange={handleChange} disabled="disabled" value={number} />
					<label>EMAIL ID</label>
					<Input
						onChange={handleChange}
						name='email'
						placeholder='Enter Your Email Id'
					/>
					<label>CREATE PASSWORD</label>
					<Input
						onChange={handleChange}
						name='password'
						placeholder='Enter your Password'
					/>
					<label>FULL NAME</label>
					<select onChange={handleChange} name='title'>
						<option value=''>Title</option>
						<option value='mr'>Mr.</option>
						<option value='ms'>Ms.</option>
						<option value='mrs'>Mrs.</option>
						<option value='dr'>Dr.</option>
					</select>
					<Input
						onChange={handleChange}
						name='fname'
						placeholder='First Name'
					/>
					<Input onChange={handleChange} name='lname' placeholder='Last Name' />
					<input onChange={handleChange} name='promo' type='checkbox' />
					<label>
						I would like to be kept informed of Special Promotions and offers by
						Yatra.
					</label>
					<br />
					<input onChange={handleChange} name='notify' type='checkbox' />

					<label>I would like to get What'sApp notifications.</label>
					<But type='submit' />
				</Form>
				<P>
					By proceeding, you agree with our
					<a href='https://www.yatra.com/online/terms-of-service.html'>
						{" "}
						Terms of Service
					</a>
					,{" "}
					<a href='https://www.yatra.com/online/privacy-policy.html'>
						{" "}
						Privacy Policy
					</a>{" "}
					&
					<a href='https://www.yatra.com/online/yatra-user-agreement.html'>
						Master User Agreement.
					</a>
				</P>
			</div>
		</LBox>
	);
}

const LBox = styled.div`
	padding: 1%;
	font-size: 14px;
	width: 44%;
	margin: 4% auto;
	height: 550px;
	background: white;
	box-shadow: 1px 1px 4px silver;
	& > div {
		width: 90%;
		margin: auto;
	}
`;

const Form = styled.form`
	color: #666;
`;

const Input = styled.input`
	width: 90%;
	padding: 2%;
	margin: 3% auto;
	border: transparent;
	box-shadow: 0px 2px 3px silver;
	outline: none;
	height: 20px;
`;

const But = styled.input`
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
