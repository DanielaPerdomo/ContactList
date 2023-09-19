import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Card } from "../component/card.jsx"
import { Context } from "../store/appContext";




export const Home = () => {

	const { actions, store } = useContext(Context)

	useEffect(() => {
		actions.getContact()
	}, [])

	return (

		<div className="">
		{
			store.contacts.map((item, index) => (
				<Card data={item} key={index} />
			))
		}

		</div>

	);
	
};
