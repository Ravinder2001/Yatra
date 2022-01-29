/** @format */
import "./navBar.css";
import Flight from "@material-ui/icons/Flight";
import Hotel from "@material-ui/icons/Hotel";
import Train from "@material-ui/icons/Train";
import Bus from "@material-ui/icons/DirectionsBus";
import Car from "@material-ui/icons/DirectionsCar";
import Holiday from "@material-ui/icons/BeachAccess";
import Home from "@material-ui/icons/Home";
import Adven from "@material-ui/icons/FilterHdr";
import Active from "@material-ui/icons/Rowing";
import Monu from "@material-ui/icons/Museum";
import Arrow from "@material-ui/icons/ArrowDropDown";
import Right from "@material-ui/icons/ArrowRight";

function Navbar() {
	var data = JSON.parse(localStorage.getItem("signIn"));
	return (
		<div>
			<div id='nav'>
				<div id='logoBox'>
					<img
						id='logo'
						alt=''
						src='https://bl.thgim.com/migration_catalog/ouzym0/article18356825.ece/alternates/WIDE_615/ct26New-Yatra-Logo'
					/>
				</div>
				<div id='list'>
					<div
						className='Icon'
						onClick={() => {
							window.location.href = "/";
						}}
						style={{ color: "red", borderBottom: "4px solid" }}>
						<Flight />
						Flights
					</div>
					<div className='Icon'>
						<Hotel />
						Hotels
					</div>
					<div
						className='Icon'
						onClick={() => {
							window.location.href = "/trains";
						}}>
						<Train />
						Trains
					</div>
					<div className='Icon'>
						<Bus />
						Buses
					</div>
					<div className='Icon'>
						<Car id='cabs' />
						Cabs
					</div>
					<div className='Icon'>
						<Holiday />
						Holidays
					</div>
					<div id='more'>+ More</div>
					<div id='morelist'>
						<div>
							<Home className='moreicon' />
							<span className='morename'>Village & Stays</span>
						</div>
						<div>
							<Adven className='moreicon' />
							<span className='morename'>Adventure</span>
						</div>
						<div>
							<Active className='moreicon' />
							<span className='morename'>Activites</span>
						</div>
						<div>
							<Monu className='moreicon' />
							<span className='morename'>Monuments</span>
						</div>
					</div>
				</div>
				<div id='sideBar'>
					<div id='sideho'>
						<div
							id='sidetext1'
							className='sidetext'
							onClick={() => {
								window.location.href = "/login";
							}}>
							{!data ? "Login" : `Hi ${data.fname}`}
						</div>
						{/* <Arrow className='ar' /> */}
					</div>

					<div id='sideho1'>
						<div className='sidetext'>Support</div>
						<Arrow className='ar' />
					</div>
					<div>
						<div className='sidetext'>Offers</div>
					</div>
					<div>
						<div className='sidetext'>Yatra For Business</div>
					</div>

					{/* <div id='acctext'>
						<div className='fl'>
							<img
								alt=''
								src='https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_account_circle_48px-512.png'
								id='acci'
							/>
						</div>
						<div className='fl' id='bo'>
							<div className='fl'>
								<Right />
							</div>
							<div className='book' style={{ marginTop: "13px" }}>
								My Booking
							</div>
						</div>
						<div className='fl' style={{ marginLeft: "0px", marginTop: "0px" }}>
							<div className='fl'>
								<Right />
							</div>
							<div className='book' style={{ marginTop: "13px" }}>
								My Refund
							</div>
						</div>
						<button
							id='login'
							onClick={() => {
								window.location.href = "/login";
							}}>
							Login
						</button>
						<button id='signup'>Sign Up</button>
						<hr id='hr' />
						<div id='bus'>
							<div className='fl'>
								<Right />
							</div>
							<div className='book' style={{ marginTop: "13px" }}>
								Yatra For Busness
							</div>
						</div>
						<div id='ag'>
							<div className='fl'>
								<Right />
							</div>
							<div className='book' style={{ marginTop: "13px" }}>
								Yatra For Travel Agent
							</div>
						</div>
					</div> */}
					<div id='sup'>
						<div>
							<div className='ri'>
								<Right />
							</div>
							<div className='rit'>Check Your Refund</div>
						</div>
						<div className='cl'>
							<div className='ri'>
								<Right />
							</div>
							<div className='rit'>Contact Us</div>
						</div>
						<div className='cl'>
							<div className='ri'>
								<Right />
							</div>
							<div className='rit'>Complete Booking</div>
						</div>
						<div className='cl'>
							<div className='ri'>
								<Right />
							</div>
							<div className='rit'>Make a Payment</div>
						</div>
						<div className='cl'>
							<div className='ri'>
								<Right />
							</div>
							<div className='rit'>Flight Cancelations Charges</div>
						</div>
						<div className='cl'>
							<div className='ri'>
								<Right />
							</div>
							<div className='rit'>Complete Holidays Booking</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Navbar;
