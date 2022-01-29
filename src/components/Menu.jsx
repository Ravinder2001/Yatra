/** @format */

import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const Div = styled.div`
	color: red;
	width: 12%;
	display: grid;
	margin-bottom: 2%;
`;

const Div2 = styled.a`
	height: 36px;
	border: 1px solid rgb(161, 161, 161);
	border-bottom: none;
	cursor: pointer;
	background: #e5e5e5;
	padding-top: 8%;

	&:hover {
		background: white;
		border-left: 3px solid red;
	}
`;
const Divlast = styled.a`
	height: 36px;
	border: 1px solid rgb(161, 161, 161);
	cursor: pointer;
	background: #e5e5e5;
	padding-top: 8%;

	&:hover {
		background: white;
		border-left: 3px solid red;
	}
`;
const LinkStyle = {
	textDecoration: "none",
	color: "black   ",
};

function Menu() {
	return (
		<Div>
			<Div2>
				<Link to='/payment/upi' style={LinkStyle}>
					UPI{" "}
				</Link>
			</Div2>

			<Div2>
				<NavLink to='/payment/creditcard' style={LinkStyle}>
					CreditCard{" "}
				</NavLink>
			</Div2>

			<Div2>
				<NavLink to='/payment/debitcard' style={LinkStyle}>
					DebitCard{" "}
				</NavLink>
			</Div2>

			<Div2>
				<NavLink to='/payment/netbanking' style={LinkStyle}>
					NetBanking{" "}
				</NavLink>
			</Div2>

			<Div2>
				<NavLink to='/payment/netbanking' style={LinkStyle}>
					Paytm{" "}
				</NavLink>
			</Div2>

			<Div2>
				<NavLink to='/payments/netbanking' style={LinkStyle}>
					Bhimpay
				</NavLink>
			</Div2>

			<Div2>
				<NavLink to='/payments/netbanking' style={LinkStyle}>
					Emi Options{" "}
				</NavLink>
			</Div2>

			<Div2>
				<NavLink to='/payments/netbanking' style={LinkStyle}>
					Paypal{" "}
				</NavLink>
			</Div2>

			<Div2>
				<NavLink to='/payments/netbanking' style={LinkStyle}>
					Wallets{" "}
				</NavLink>
			</Div2>

			<Div2>
				<NavLink to='/payments/netbanking' style={LinkStyle}>
					Pay After{" "}
				</NavLink>
			</Div2>
			<Divlast>
				<NavLink to='/payments/netbanking' style={LinkStyle}>
					Mobikwick{" "}
				</NavLink>
			</Divlast>
		</Div>
	);
}

export { Menu };
