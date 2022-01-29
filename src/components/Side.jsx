/** @format */

import "./side.css";
function Side() {
	const flight = [
		{ from: "Delhi", to: "Chennai", date: "Sat, 29 Jan", rup: "2341" },
		{ from: "Delhi", to: "Mumbai", date: "Mon, 10 Jan", rup: "2352" },
		{ from: "Delhi", to: "Goa", date: "Wed, 19 Jan", rup: "3563" },
		{ from: "Delhi", to: "Bangluru", date: "Thr, 29 Jan", rup: "3170" },
	];
	const iflight = [
		{ from: "Delhi", to: "Phuket", date: "Sat, 04 Dec", rup: "70,342" },
		{ from: "Delhi", to: "Dubai", date: "Mon, 6 Dec", rup: "24,352" },
		{ from: "Delhi", to: "San Francisco", date: "Wed, 07 Jan", rup: "43,563" },
		{ from: "Delhi", to: "London", date: "Thr, 19 Jan", rup: "23,170" },
	];
	return (
		<div>
			<div style={{ width: "100px", height: "100px" }}></div>

			<div style={{ marginLeft: "42%" }}>
				<img
					src='https://www.yatra.com/ythomepagecms/media/banner/2021/Jun/50572d900d1e844a320d897c415b3646.jpg'
					alt=''
				/>
			</div>
			<span style={{ marginLeft: "42%" }}>
				<img
					src='https://www.yatra.com/ythomepagecms/media/double_banner/2021/Oct/e7501e5de4e8308cf3fae2dfcb5c5bca.jpg'
					alt=''
					width='350px'
					style={{ marginTop: "10px" }}
				/>
			</span>
			<span>
				<img
					src='https://www.yatra.com/ythomepagecms/media/double_banner/2020/Jul/5b10fea20065899f659cec0ecee16bca.jpg'
					alt=''
					width='350px'
					style={{ marginLeft: "20px" }}
				/>
			</span>
			<div style={{ marginLeft: "42%" }}>
				<div
					style={{
						fontFamily: "Rubik,sans-serif",
						marginTop: "40px",
						fontSize: "20px",
					}}>
					Countries Open for Travel
				</div>
				<div style={{ float: "left", marginTop: "20px" }}>
					<div>
						<img
							className='cur'
							src='https://imgcld.yatra.com/ytimages/image/upload/q_60,c_fill,w_160,h_220/v1494332990/Fussen.jpg'
							alt=''
						/>
						<div
							style={{
								marginLeft: "15px",
								marginTop: "10px",
								fontWeight: "bolder",
								textAlign: "center",
							}}>
							Germany
						</div>
					</div>
				</div>
				<div style={{ float: "left", marginTop: "20px" }}>
					<div>
						<img
							className='cur'
							src='https://imgcld.yatra.com/ytimages/image/upload/q_60,c_fill,w_160,h_220/v1498805906/Big_Ben_and_Westminster_parliament_in_London.jpg'
							alt=''
						/>
						<div
							style={{
								marginLeft: "15px",
								marginTop: "10px",
								fontWeight: "bolder",
								textAlign: "center",
							}}>
							United Kingdom
						</div>
					</div>
				</div>
				<div style={{ float: "left", marginTop: "20px" }}>
					<div>
						<img
							className='cur'
							src='https://imgcld.yatra.com/ytimages/image/upload/q_60,c_fill,w_160,h_220/v1493357412/Pittsburgh.jpg'
							alt=''
						/>
						<div
							style={{
								marginLeft: "15px",
								marginTop: "10px",
								fontWeight: "bolder",
								textAlign: "center",
							}}>
							USA
						</div>
					</div>
				</div>
				<div style={{ float: "left", marginTop: "20px" }}>
					<div>
						<img
							className='cur'
							src='https://imgcld.yatra.com/ytimages/image/upload/q_60,c_fill,w_160,h_220/v1473936370/Niagra_Falls_Activities_to_do_Niagara_Helicopter_ride.jpg'
							alt=''
						/>
						<div
							style={{
								marginLeft: "15px",
								marginTop: "10px",
								fontWeight: "bolder",
								textAlign: "center",
							}}>
							Canada
						</div>
					</div>
				</div>
			</div>
			<div style={{ marginLeft: "42%", clear: "both" }}>
				<div
					style={{
						marginTop: "320px",
						fontFamily: "Rubik,sans-serif",
						fontSize: "20px",
					}}>
					Yatra Specials
				</div>
				<div style={{ float: "left", marginTop: "20px" }}>
					<div>
						<img
							className='cur'
							src='https://www.yatra.com/ythomepagecms/media/todayspick_home/2021/Oct/17edbfdd490d49b106d7f42800166057.jpg'
							alt=''
						/>
					</div>
				</div>
				<div style={{ float: "left", marginTop: "20px" }}>
					<div>
						<img
							className='cur'
							src='https://www.yatra.com/ythomepagecms/media/todayspick_home/2021/Oct/00b1cdff1ef0c2ca43ba6049378c6b03.jpg'
							alt=''
						/>
					</div>
				</div>
				<div style={{ float: "left", marginTop: "20px" }}>
					<div>
						<img
							className='cur'
							src='https://www.yatra.com/ythomepagecms/media/todayspick_home/2021/Nov/5427e03c5e2e05e6679cd72ab58c589b.jpg'
							alt=''
						/>
					</div>
				</div>
				<div style={{ float: "left", marginTop: "20px" }}>
					<div>
						<img
							className='cur'
							src='https://www.yatra.com/ythomepagecms/media/todayspick_home/2021/Nov/2d233faadc9d6ef2e37a35fbc0cb1c7d.png'
							alt=''
						/>
					</div>
				</div>
				<div style={{ float: "left", marginTop: "20px" }}>
					<div>
						<img
							className='cur'
							src='https://www.yatra.com/ythomepagecms/media/todayspick_home/2021/Oct/62267a7ac618778a9c0c56f59c9b7d22.jpg'
							alt=''
						/>
					</div>
				</div>
				<div style={{ float: "left", marginTop: "20px" }}>
					<div>
						<img
							className='cur'
							src='https://www.yatra.com/ythomepagecms/media/todayspick_home/2020/Oct/4c674432dbf22322e16ad4a44cb6aff1.png'
							alt=''
						/>
					</div>
				</div>
			</div>
			<div style={{ marginLeft: "42%", clear: "both" }}>
				<div
					style={{
						fontFamily: "Rubik,sans-serif",
						marginTop: "500px",
						fontSize: "20px",
					}}>
					Popular Domestic Flight Routes
				</div>
				<div
					style={{
						fontWeight: "bolder",
						float: "left",
						marginTop: "5px",
						marginLeft: "0px",
					}}>
					From -
				</div>
				<div className='f'>NEW DELHI</div>
				<div className='f'>MUMBAI</div>
				<div className='f'>BANGLORE</div>
				<div className='f'>KOLKATA</div>
				<div style={{ clear: "both" }}>
					{flight.map((e) => (
						<div className='t'>
							<div className='line'></div>
							<div className='frm'>{e.from}</div>
							<div className='date'>{e.date}</div>
							<div className='to'>{e.to}</div>

							<div className='sta'>Starting From</div>
							<div className='rup'>₹{e.rup}</div>
						</div>
					))}
				</div>
			</div>
			<div style={{ marginLeft: "42%", clear: "both" }}>
				<div
					style={{
						fontFamily: "Rubik,sans-serif",
						marginTop: "270px",
						fontSize: "20px",
					}}>
					Popular International Flight Routes
				</div>
				<div
					style={{
						fontWeight: "bolder",
						float: "left",
						marginTop: "5px",
						marginLeft: "0px",
					}}>
					From -
				</div>
				<div className='f'>NEW DELHI</div>
				<div className='f'>MUMBAI</div>
				<div className='f'>BANGLORE</div>
				<div className='f'>KOLKATA</div>
				<div style={{ clear: "both" }}>
					{iflight.map((e) => (
						<div className='t'>
							<div className='line'></div>
							<div className='frm'>{e.from}</div>
							<div className='date'>{e.date}</div>
							<div className='to'>{e.to}</div>
							<br />
							<div className='sta'>Starting From</div>
							<div className='rup'>₹{e.rup}</div>
						</div>
					))}
				</div>
			</div>
			<div style={{ marginLeft: "42%", marginTop: "260px", cursor: "pointer" }}>
				<img
					src='https://dsm01pap002files.storage.live.com/y4mTatMMrGtgWBtci1RE1KCnpxozel0L0Fdlhv4tLWoT_6-9dV0oX04CfeadFd0URl8fSRvwhwDS9vAugsEc15G7O0L0Po_QYW2CDa1G_RuDKMwpOirhCJ4YlGmOxY7t4fBmld3bl_814gTPOjda1MuRKWa6eT-u3UgHk4ff1sW7zVwcQSiyV6wVfgsIvVIJH3W?width=728&height=300&cropmode=none'
					alt=''
				/>
			</div>
			<div style={{ marginLeft: "42%", marginTop: "30px", cursor: "pointer" }}>
				<img
					src='https://dsm01pap002files.storage.live.com/y4mLaMbFX2zzlXsztCI04C13McTPw0wbYPk1UeLLCpZgiJYMAeRy8bXjGld5pc14ot852V56S9Qs-R33Yx6Q6kcGirurSmcPrFqWiFLSTWGX2U2Fj7bbrfZnnF8Niby5x9DAIKzwHfvnuAvEzAORrJDUIJ9IZvP7NKParNsfUDPuuMEsT5geFB1_NIOKl0XOK4l?width=718&height=251&cropmode=none'
					alt=''
				/>
			</div>
			<div style={{ marginLeft: "42%", marginTop: "30px", cursor: "pointer" }}>
				<img
					src='https://dsm01pap002files.storage.live.com/y4mVqxoR-JGKuI6DH8vX6OtE9zv6BCu5LDcTydCw1BUk6o1Gha9PTR1_NQG5ZfjWv5lw-z6CRV1xEUlN8WjOXBt13ehXCqPxvr1qCNiP-ah3qb0j1XHfqIFok5Kb6B4spgJjaEdE2wBuAWnmh0VSXyL1VBts93QtqLSk7GzKsoqM6S8ixwh0E8ce3Lo2Naw4L_R?width=717&height=363&cropmode=none'
					alt=''
				/>
			</div>
		</div>
	);
}
export default Side;
