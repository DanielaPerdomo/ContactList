import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			
			{/* INICIO DEL FORMULARIO DEL CONTACT LIST */}
			<div className="mb-3">
				<label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
				<input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Full Name"/>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
				<input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter email"/>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
				<input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter phone"/>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
				<input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter address"/>
			</div>

			<Link to="/">
				<button className="btn btn-primary col-12">Save</button>
			</Link>

		</div>
	);
};
