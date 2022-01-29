/** @format */
import "./flight.css";
import Arrow from "@material-ui/icons/ArrowDropDown";
import { useState } from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import Book from "./Book";
import Navbar from "./NavBar";

import { Booking } from "./booking";
import { Success } from "./Success";

import Side from "./Side";
import MainPayment from "./PayM";
import { SignIn } from "./SignIn";
function Flight() {
	const [adult, setAdult] = useState(1);
	const [child, setChild] = useState(0);
	const [Infant, setInfant] = useState(0);
	const [count, setCount] = useState(0);
	const [passenger, setPass] = useState(1);
	const [clas, setClass] = useState("Business");
	const [from, setFrom] = useState([]);
	const [to, setTo] = useState([]);
	const [date, setDate] = useState("");
	const [data, setData] = useState([]);
	const [api, setApi] = useState([])
	const [tapi,setTap]=useState([])
	function save(from, to, date, clas, passenger) {
		const arr = {
			from,
			to,
			date,
			class: clas,
			passenger,
		};
		 setData(arr);
		console.log(data);
		localStorage.setItem("travel", JSON.stringify(arr));
	}
	function handleDate(e) {
		setDate(e.target.value);
	}
	function handlefrom(e) {
		setFrom(e.target.value);
	}
	function handleto(e) {
		setTo(e.target.value);
	}
	function incre(a) {
		
			setAdult(adult + a);
		
		
	}
	function incres(a) {
		setChild(child + a);
	}
	function incress(a) {
		setInfant(Infant + a);
	}
	function pass(a) {
		setPass(passenger + a);
	}
	function addcla(a) {
		setClass(a);
	}
	function show() {
		
		setFrom(to.city_name);
		
		console.log(from)
		//  setTo(from.city_name);
	}
	function change() {
		if (count % 2 === 1) {
			document.getElementById("dropmenu").style.display = "none";
			document.getElementById("here").style.display = "block";
			document.getElementById("here1").style.display = "block";
			document.getElementById("here2").style.display = "block";
			document.getElementById("dropmenu").style.transition = "2s";
		} else {
			document.getElementById("dropmenu").style.display = "block";
			document.getElementById("here").style.display = "none";
			document.getElementById("here1").style.display = "none";
			document.getElementById("here2").style.display = "none";
		}

		setCount(count + 1);
	}
	// function validation() {
	// 	var x = document.getElementById("ddd").value;
	// 	console.log(x);
	// 	if (x === "") {
	// 		alert("Date must be filled out");
	// 		return false;
	// 	}
	// 	return true;
	// }
	

	return (
		<div>
			<Switch>
				<Route path='/' exact>
					<Navbar></Navbar>
					<div
						style={{
							width: "450px",
							marginTop: "100px",
							float: "left",
							position: "fixed",
						}}>
						<div id='box'>
							<h4 id='text'>Book Flights, Hotels and Holiday Packages</h4>
							<div className='one' id='onee'>
								ONE WAY
							</div>
							<div className='one' id='ro'>
								ROUND TRIP
							</div>
							<div className='one' id='ro'>
								MULTI CITY
							</div>
							<div className='one' id='chart'>
								CHARTER
							</div>
							<div className='depart'>
								<div className='from'>Depart From</div>
								<div>
									<input
										className='input'
										value={from.city_name}
										type='text'
										id="query"
										
										placeholder='New Delhi'
										onChange={async (e) => {
											handlefrom(e)
											document.getElementById("dbox").style.display="block"
											const data = await fetch(`https://trains-flights-api.herokuapp.com/airports?name=${e.target.value}`)
											const res = await data.json()
											// console.log(res)
											setApi(res)
										}}
									/>
								</div>
								<div className='code'>{from.IATA_code || "DLI"}</div>
								<hr />
							</div>
							<div id='dbox'>
								<div style={{textAlign:"center",fontWeight:"bold"}}>Airports</div>
								{api.map((e) => (
									<div onClick={() => {
										setFrom(e)
										document.getElementById("dbox").style.display="none"
									}} className="st">{e.city_name}</div>
								))}
							</div>
							<div id='change'>
								<img
									src='data:image/png;base64,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'
									alt=''
									width='20px'
									// onClick={show}
								/>
							</div>
							<div id='arrival'>
								<div className='from'>Going To</div>
								<div>
									<input
										style={{ textAlign: "right" }}
										className='input'
										value={to.city_name}
										onChange={async (e) => {
											handleto(e)
											document.getElementById("tbox").style.display="block"
											const data = await fetch(`https://trains-flights-api.herokuapp.com/airports?name=${e.target.value}`)
											const res = await data.json()
											// console.log(res)
											setTap(res)
										}}
										type='text'
										placeholder='Mumbai'
									/>
								</div>
								<div className='code'>{to.IATA_code || "MUM"}</div>
								<hr />
							</div>
							<div id='tbox'>
								<div style={{textAlign:"center",fontWeight:"bold"}}>Airports</div>
								{tapi.map((e) => (
									<div onClick={() => {
										setTo(e)
										 document.getElementById("tbox").style.display="none"
									}} className="st">{e.city_name}</div>
								))}
							</div>
							<div className='depart'>
								<div id='de'>Departure date</div>
								<input
									className='dei'
									type='date'
									value={date}
									id='ddd'
									onChange={handleDate}
									required
								/>
							</div>
							<div id='re'>
								<div style={{ color: "grey" }}>Return Date</div>
								<div style={{ color: "blue", fontWeight: "bolder" }}>
									Book Round Trip
								</div>
								<div style={{ color: "blue", fontWeight: "bolder" }}>
									To save extra
								</div>
								<input id='deii' type='date' />
							</div>
							<div>
								<div id='option' onClick={change}>
									<div style={{ color: "grey" }}>Travellers Class</div>
									<span
										href='https://yatra.vercel.app/'
										style={{ fontWeight: "bolder",marginTop:"5px" }}>
										{passenger} Traveller {clas}
									</span>
									<span id='drop'>
										<Arrow />
									</span>
								</div>
								<div id='dropmenu'>
									<div className='fl'>
										<div>Adults</div>
										<button
											className='btn'
											onClick={() => {
												if (adult != 1) {
													incre(-1);
													pass(-1);
												}

												
											}}>
											-
										</button>{" "}
										{adult}{" "}
										<button
											className='btn'
											onClick={() => {
												incre(+1);
												pass(1);
											}}>
											+
										</button>
									</div>
									<div className='fl' style={{ marginLeft: "70px" }}>
										<div>Child</div>
										<button
											className='btn'
											onClick={() => {
												if (child != 0) {
													incres(-1);
												pass(-1);
												}
												
											}}>
											-
										</button>{" "}
										{child}{" "}
										<button
											className='btn'
											onClick={() => {
												incres(+1);
												pass(1);
											}}>
											+
										</button>
									</div>
									<div className='fl' style={{ marginLeft: "70px" }}>
										<div>Infant</div>
										<button
											className='btn'
											onClick={() => {
												if (Infant != 0) {
													incress(-1);
												pass(-1);
												}
												
											}}>
											-
										</button>{" "}
										{Infant}{" "}
										<button
											className='btn'
											onClick={() => {
												incress(+1);
												pass(1);
											}}>
											+
										</button>
									</div>
									<div
										style={{
											clear: "both",
											marginLeft: "20px",
											marginTop: "10px",
										}}>
										<div style={{ cursor: "pointer" }}>
											<input
												type='radio'
												name='radio'
												
												onClick={() => {
													addcla("Economy");
												}}
											/>
											Economy
										</div>
										<div style={{ cursor: "pointer" }}>
											<input
												type='radio'
												name='radio'
												onClick={() => {
													addcla("Premium Economy");
												}}
											/>
											Premium Economy
										</div>
										<div style={{ cursor: "pointer" }}>
											<input
												type='radio'
												name='radio'
												checked
												onClick={() => {
													addcla("Business");
												}}
											/>
											Business
										</div>
										<div>
											<button id='btnd'>
												<div
													onClick={() => {
														document.getElementById("dropmenu").style.display = "none";	
														document.getElementById("here").style.display = "block";
														document.getElementById("here1").style.display = "block";
														document.getElementById("here2").style.display = "block";
														document.getElementById("dropmenu").style.transition = "2s";
													}}
													style={{ textDecoration: "none", color: "white" }}>
													Done
												</div>
											</button>
										</div>
									</div>
								</div>
								<div id='here' style={{ marginTop: "10px" }}>
									<span className='ch'>
										<input type='checkBox' className='chh' />
										Non Stop Flight
									</span>
									<span
										style={{
											marginLeft: "90px",
											fontfamily: "Rubik,sans-serif",
										}}>
										<input type='checkBox' className='chh' />
										Student Fare
									</span>
								</div>

								<div id='here1'>
									<span className='ch'>
										<input type='checkBox' className='chh' />
										Armed Forces
									</span>
									<span
										style={{
											marginLeft: "100px",
											fontfamily: "Rubik,sans-serif",
										}}>
										<input type='checkBox' className='chh' />
										Senior Citizen
									</span>
								</div>
								<div id='here2'>
									<span>
										<button id='btnre'>Check Your Refund</button>
									</span>
									<span>
										<button
											id='btnfl'
											onClick={() => {
												 save(from.city_name, to.city_name, date, clas, passenger);
												
											}}>
											<Link to='/book' id='sdf'>
												Search Flights
											</Link>
										</button>
									</span>
								</div>
							</div>
						</div>
					</div>

					<Side style={{ width: "77%", float: "left" }}></Side>
				</Route>
				<Route path='/book' exact>
					<Book value={data}></Book>
				</Route>
				<Route path='/flight'>
					{/* <Nav></Nav> */}
					<Booking value={data}></Booking>
				</Route>
				<Route path='/payment'>
					<MainPayment value={data}></MainPayment>
				</Route>
				<Route path='/success'>
					<Success></Success>
				</Route>
				<Route path='/login'>
					<SignIn></SignIn>
				</Route>
			</Switch>
		</div>
	);
}
export default Flight;
