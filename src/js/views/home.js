import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/card.jsx"
import { Context } from "../store/appContext";




export const Home = () => {

	const { actions, store } = useContext(Context)

	return (

		<div className="">
		{
			store.contacts.map((item, index) => (
				<Card data = {item} key = {index} />
			))
		}

		</div>

	);
	
};
