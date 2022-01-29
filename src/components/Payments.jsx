/** @format */

import styled from "styled-components";

const Div = styled.div`
	width: 93%;
	background: white;

	display: flex;
	justify-content: space-between;
	padding: 4px 10px;
`;
const Div2 = styled.div`
	width: 86%;
	margin: auto;
	background: white;
	display: flex;
	justify-content: space-between;
	padding-left: 10px;
	padding-right: 10px;
	padding: 4px 10px;
	border-top: 2px solid rgb(161, 161, 161, 0.3);
	border-bottom: 2px solid rgb(161, 161, 161, 0.3);
`;
const H2 = styled.h2`
	padding: 0px;
	margin: 10px 3px;
`;

const Col = styled.span`
	color: orange;
`;

const Divl = styled.div`
	width: 93%;
	background: white;
	display: flex;
	justify-content: space-between;
	padding: 4px 10px 10px 10px;
`;
const Wrapper = styled.div`
	display: grid;

	.summ {
		padding: 0%;
		height: 25px;
		font-weight: 500;
	}
`;

const Div3 = styled.div`
	width: 93%;
	font-size: 13px;
	background: white;
	justify-content: space-between;
	display: flex;
	padding: 2px 10px;
`;

const D = styled.div`
	border: 1px solid rgb(161, 161, 161);
	width: 115%;
	margin-left: 8%;
	height: 74.5%;
	background: white;
`;
const D1 = styled.div`
	border: 1px solid rgb(161, 161, 161);
	width: 115%;
	margin-left: 8%;
	height: 54%;
`;
const D2 = styled.div`
	border: 1px solid rgb(161, 161, 161);
	width: 115%;
	margin-left: 8%;
	height: 68.5%;
`;

function Paymentsdiv({ data }) {
	console.log(data);
	var travel = JSON.parse(localStorage.getItem("travel"));
	var details = JSON.parse(localStorage.getItem("Details"));
	var userData = JSON.parse(localStorage.getItem("userData"));
	return (
		<Wrapper>
			<D>
				<Div>
					<span>Total Flight Price</span>
					<span> ₹ {details.price}</span>
				</Div>

				<Div>
					<span>Convinience Fee</span>
					<span> ₹ 300</span>
				</Div>

				<Div2>
					<H2>You Pay</H2>
					<H2> ₹ {details.price + 300}</H2>
				</Div2>

				<Divl>
					<span>
						Earn <Col>eCash</Col>
					</span>
					<span>₹ 250</span>
				</Divl>
			</D>

			<D1>
				<div className='summ'>Summary</div>
				<Div>
					<span>
						<b>{travel.from}</b>
					</span>
					<span>
						<i class='fas fa-plane'></i>
					</span>
					<span>
						<b>{travel.to}</b>
					</span>
				</Div>

				<Div3>
					<span>
						{travel.date} | {details.tfrom}
					</span>
					<span>
						{travel.date} | {details.tto}
					</span>
				</Div3>
			</D1>

			<D2>
				<span className='summ'>Contact</span>
				<Div>
					<ol>
						<li>{userData.name}</li>
					</ol>
				</Div>
				<Div>
					<span>Email:</span>
					<span>{userData.email}</span>
				</Div>
				<Div>
					<span>Phone:</span>
					<span>{userData.mobile}</span>
				</Div>
			</D2>
		</Wrapper>
	);
}
export { Paymentsdiv };
