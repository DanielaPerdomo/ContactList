import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Card = ({data}) => (
	<div className="d-flex justify-content-center mt-5">

		{/* INICIO DE LA CARD DE  CONTACTO */}

		<div className="card mb-3" style={{"maxWidth": "540px"}}>
  			<div className="row g-0 ">
				<div className="col-md-4 align-middle">
					<img src={rigoImage} className="contactImage img-fluid rounded-start" alt="..."/>
				</div>
    			<div className="col-md-8 ">
      				<div className="card-body">
						<h5 className="card-title">{data.full_name}</h5>
						<p className="card-text"><i className="fa-solid fa-location-dot fa-fade"></i> {data.address}</p>
						<p className="card-text"><i className="fa-solid fa-phone fa-fade"></i> {data.phone}</p>
						<p className="card-text"><i className="fa-solid fa-envelope fa-fade"></i>{data.email}</p>
      				</div>
    			</div>
  			</div>
		</div>


	</div>
);