import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="d-flex justify-content-center mt-5">

		{/* INICIO DE LA CARD DE  CONTACTO */}

		<div className="card mb-3" style={{"max-width": "540px"}}>
  			<div className="row g-0 ">
				<div className="col-md-4 align-middle">
					<img src={rigoImage} className="contactImage img-fluid rounded-start" alt="..."/>
				</div>
    			<div className="col-md-8 ">
      				<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text"><i class="fa-solid fa-location-dot fa-fade"></i></p>
						<p className="card-text"><i class="fa-solid fa-phone fa-fade"></i></p>
						<p className="card-text"><i class="fa-solid fa-envelope fa-fade"></i></p>
      				</div>
    			</div>
  			</div>
		</div>


	</div>
);
