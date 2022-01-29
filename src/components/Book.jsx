/** @format */
import "./book.css";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import Nav from "./MainNav";

import Code from "@material-ui/icons/Code";
import Flight from "@material-ui/icons/FlightTakeoff";
import { useState } from "react";
const json = require("../data.json");
function Book({ value }) {
	console.log(value);
	// const value = JSON.parse(localStorage.getItem("testObject"));

	const [from, setFrom] = useState(value.from);
	const [to, setTo] = useState(value.to);
	const date = value.date;
	const pass = value.passenger;
	const clas = value.class;
	const data = json;
	const [temp, setTemp] = useState(json.flights);

	function store(logo, flight, model, tfrom, tto, dur, price, mid, mida, midd) {
		let details = {
			logo,
			flight,
			model,
			tfrom,
			tto,
			dur,
			price,
			mid,
			mida,
			midd,
			date: date,
		};
		localStorage.setItem("Details", JSON.stringify(details));
	}
	function handle(e) {
		setFrom(e.target.value);
	}
	function handles(e) {
		setTo(e.target.value);
	}
	function reverse() {
		setFrom(to);
		setTo(from);
	}
	function filter(value) {
		const arr = data.filter((e) => {
			return e.stop === value;
		});
		setTemp(arr);
	}
	function filterprice(value) {
		const arr = data.filter((e) => {
			return e.price < value;
		});
		setTemp(arr);
	}
	function sortH() {
		var arr = data
			.filter(function (a, b) {
				return a;
			})
			.sort(function (a, b) {
				return a.price > b.price ? -1 : 1;
			});

		setTemp(arr);
	}
	function sortL() {
		var arr = data
			.filter(function (a, b) {
				return a;
			})
			.sort(function (a, b) {
				return a.price < b.price ? -1 : 1;
			});

		setTemp(arr);
	}

	return (
		<div>
			<Nav></Nav>
			<Switch>
				<Route path='/book' exact>
					<br />
					<div id='try'>
						<div>
							<img
								src='https://dsm01pap002files.storage.live.com/y4mVo1r6zEtnmW3AzK1FHtz_5rODClLKIGhyEkpGHT9T16Dn3eCVQFRltobO7JUurmkueFxx80C-CA1V2wEX6pubVxv9KNGZJx6zc4frizIaTbRXnh_Xzi8ZfJCgSMFaZFk4UpB1qZr9YcAp39odXBe4J3DRiaTzFJwdpxFaLXWiRfG9SVxWQgWlXi-pQ2gDLdI?width=62&height=38&cropmode=none'
								alt=''
								id='fligh'
							/>
						</div>
						<div id='box1'>
							<div className='fs'>From</div>
							<div>
								<input
									type='text'
									className='i'
									value={from}
									onChange={handle}
								/>
							</div>
						</div>
						<div id='box2' onClick={reverse}>
							<Code id='ch'></Code>
						</div>
						<div id='box3'>
							<div className='fs'>To</div>
							<div>
								<input
									type='text'
									className='i'
									value={to}
									onChange={handles}
								/>
							</div>
						</div>
						<div id='box4'>
							<div className='fs'>Date</div>
							<div>
								<input
									type='text'
									className='i'
									value={date}
									onChange={handle}
								/>
							</div>
						</div>
						<div id='box5'>
							<div className='fs'>Traveller(s),Class</div>
							<div>
								<div style={{ width: "230px" }} className='i'>
									{pass} Travellers {clas}
								</div>
							</div>
						</div>

						<button id='se'>Search Again</button>
					</div>
					<div id='filter'>
						<div style={{ float: "left" }}>
							<div style={{ marginLeft: "48px" }}>
								<img
									src='https://cdn0.iconfinder.com/data/icons/glyphpack/36/filter-512.png'
									alt=''
									width='20px'
									style={{ marginTop: "5px" }}
								/>
							</div>
							<div style={{ marginLeft: "40px", fontSize: "13px" }}>
								Filters
							</div>
						</div>
						<div style={{ float: "left" }}>
							<div
								style={{
									float: "left",
									marginTop: "15px",
									marginLeft: "30px",
								}}>
								Stops:
							</div>
							<div
								style={{ float: "left" }}
								className='sto'
								onClick={() => {
									filter(0);
								}}>
								0
							</div>
							<div
								style={{ float: "left" }}
								className='sto'
								onClick={() => {
									filter(1);
								}}>
								1
							</div>
							<div
								style={{ float: "left" }}
								className='sto'
								onClick={() => {
									filter(2);
								}}>
								2
							</div>
							<div
								style={{ float: "left" }}
								className='sto'
								onClick={() => {
									filter(3);
								}}>
								3
							</div>
							<div
								style={{ float: "left" }}
								className='sto'
								onClick={() => {
									setTemp(data);
								}}>
								All
							</div>
						</div>
						<div className='ppp'>
							<div style={{ float: "left" }}>Price:</div>
							<div
								className='un'
								onClick={() => {
									filterprice(4000);
								}}>
								Under 4000
							</div>
							<div
								className='un'
								onClick={() => {
									filterprice(5000);
								}}>
								Under 5000
							</div>
							<div
								className='un'
								onClick={() => {
									filterprice(7000);
								}}>
								Under 7000
							</div>

							<div
								className='un'
								style={{ width: "100px" }}
								onClick={() => {
									filterprice(10000);
								}}>
								Under 10000
							</div>
							<div
								className='un'
								onClick={() => {
									setTemp(json);
								}}
								style={{ width: "60px" }}>
								None
							</div>
						</div>
						<div className='ppp'>
							<div style={{ float: "left" }}>Sort:</div>
							<div
								className='un'
								style={{ width: "100px" }}
								onClick={() => {
									sortH();
								}}>
								High to Low
							</div>
							<div
								className='un'
								style={{ width: "100px" }}
								onClick={() => {
									sortL();
								}}>
								Low to High
							</div>
							<div
								className='un'
								onClick={() => {
									setTemp(json);
								}}>
								Remove
							</div>
							<div id='sh'>{temp.length} of 20 Flights</div>
						</div>
					</div>
					<div style={{ float: "left" }}>
						<div>
							{temp.map((e) => (
								<div className='ticket' key={e.id}>
									<div>
										<span className='deal'>DEAL</span>
										<span className='flash'>
											Use code - FLASH24 and Get Flat Rs. 550 OFF per pax (upto
											Rs. 2021).
										</span>
									</div>

									<div></div>
									<div className='li1'></div>
									<div>
										<div style={{ float: "left" }}>
											<img src={e.logo} alt='' className='logo' />
										</div>
										<div style={{ float: "left" }}>
											<div className='flname'>{e.flight}</div>
											<div className='mod'>{e.model}</div>
										</div>
										<div style={{ float: "left" }}>
											<div className='time'>{e.tfrom}</div>
											<div className='tf'>{from}</div>
										</div>
										<div
											style={{
												float: "left",
												marginTop: "15px",
												marginLeft: "30px",
											}}>
											<Flight></Flight>
										</div>
										<div style={{ float: "left" }}>
											<div className='time' style={{ marginLeft: "30px" }}>
												{e.tto}
											</div>
											<div className='tf' style={{ marginLeft: "30px" }}>
												{to}
											</div>
										</div>
										<div style={{ float: "left" }}>
											<div className='line'></div>
										</div>
										<div style={{ float: "left" }}>
											<div className='dur'>{e.dur}</div>
											<div className='stop'>{e.stop} Stop</div>
										</div>
										<div style={{ float: "left" }}>
											<div className='pri'>₹{e.price}</div>
										</div>
										<div
											style={{ float: "left" }}
											onClick={() => {
												store(
													e.logo,
													e.flight,
													e.model,
													e.tfrom,
													e.tto,
													e.dur,
													e.price,
													e.mid,
													e.mida,
													e.midd,
												);
											}}>
											<button className='farss'>
												<Link to='/flight' className='btt'>
													Book
												</Link>
											</button>
										</div>
										<div style={{ clear: "both" }}></div>
										<div className='li2'></div>
										<div>
											<span className='dtt'>Flight Details</span>
											<span className='ecash'>₹250</span>
											<span className='ec'>eCash</span>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div style={{ float: "left" }}>
						<img
							src='https://dsm01pap002files.storage.live.com/y4m59REUaD6Xcl70sO1NHf5nIhb4q24jVzZ3jxymCpWclfJE0vTQrHuGhuJg0pEWW8YQJy4rKZDUnEXuLjlekcff9t2PtEnePfxaCb0bUE5a_E8Lhr0yGb0JrJK8URTUlnigo5odhECtBmCIwoY2AVzKHi0EX2HD3eBWenGALUr9pJguxpXwh0P19RxeqxJkKJe?width=164&height=473&cropmode=none'
							alt=''
							id='imm'
						/>
					</div>
				</Route>
				{/* <Route path='/flight'>
					
					<Booking></Booking>
				</Route> */}
			</Switch>
		</div>
	);
}
export default Book;
