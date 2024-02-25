import React from "react";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";
import Card from "./Cards";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="flex-container">
				<Card url="https://static.showit.co/1200/JhOBqhDRSGSfxziWN85VTA/58611/619.jpg" />
				<Card url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7fydWKSToJlyivMBNCrz0gjhsSTb3cIpNrYN_Wg9p06k3LLhK4b3xV656qoWMN_iBcE8&usqp=CAU" />
				<Card url="https://static.showit.co/1200/rEcC3BhkTceGYwe1zvd7WA/58611/mg_3265.jpg" />
				<Card url="https://static.showit.co/1200/ITAgu-BPSzm8M6bkbfU7mg/58611/fashionportfolio007.jpg" />
			</div>
			<p>
				<div style={{ display: "flex", justifyContent: 'center', padding: '20px' }}>
					Design & Images by{" "}
					<a href="http://www.debbiedavila.com"> Deborina Dávila ©</a> 🦩
				</div>
			</p >
		</div>
	)
};

export default Home;
