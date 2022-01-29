/** @format */
import "./mainNav.css";
import { Link } from "react-router-dom";
import Arrow from "@material-ui/icons/ArrowDropDown";
import Right from "@material-ui/icons/ArrowRight";

Nav();
function Nav() {
	var data = JSON.parse(localStorage.getItem("signIn"));
	// const [details, setDetails] = useState(data);

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

				<div id='sideBar'>
					<div id='sideho'>
						<div
							id='sidetext1'
							style={{ marginLeft: "700px" }}
							className='sidetext'>
							{!data ? "My Account" : `Hi ${data.fname}`}
						</div>
						<Arrow className='ar' />
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
					<div id='acctext'>
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
						<Link to='/login' id='login'>
							Login
						</Link>
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
					</div>
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
export default Nav;
