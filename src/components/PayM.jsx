/** @format */

// import logo from './logo.svg';
import "./paym.css";
import { Menu } from "./Menu";
import { Nav } from "./Nav";
import { UPI } from "./UPI";
import { DebitCard } from "./DebitCard";
import { CreditCard } from "./CreditCard";
import { NetBanking } from "./NetBanking";
import { Route, Switch } from "react-router";
import { Paymentsdiv } from "./Payments";


function MainPayment({ value }) {
	return (
		<>
			<Nav />
			<div id='paymentcarddiv'>
				<i className='fas fa-credit-card' id='cardpay'></i>
				<span id='payquote'>Payment Method</span>
			</div>
			<div className='App' id='APP'>
				<Menu />
				<Switch>
					<Route path='/payment/upi'>
						<UPI></UPI>
					</Route>
					<Route path='/payment/creditcard' exact>
						<CreditCard></CreditCard>
					</Route>
					<Route path='/payment/debitcard' exact>
						<DebitCard></DebitCard>
					</Route>
					<Route path='/payment/netbanking' exact>
						<NetBanking></NetBanking>
					</Route>

					{/* <Route path='/payment/success' exact>
						
						<Success></Success>
					</Route> */}
				</Switch>

				<Paymentsdiv data={value} />
			</div>
		</>
	);
}

export default MainPayment;
