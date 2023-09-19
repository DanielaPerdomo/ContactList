import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Card = ({ data }) => (



	
  <div className="d-flex justify-content-center mt-5">
    {/* INICIO DE LA CARD DE  CONTACTO */}

    <div className="card mb-3" style={{ minWidth: "700px" }}>
      <div className="row g-0 ">
        <div className="col-md-4 align-middle">
          <img
            src={rigoImage}
            className="contactImage img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-6 ">
          <div className="card-body">
            <h5 className="card-title">{data.full_name}</h5>
            <p className="card-text">
              <i className="fa-solid fa-location-dot fa-fade"></i>{" "}
              {data.address}
            </p>
            <p className="card-text">
              <i className="fa-solid fa-phone fa-fade"></i> {data.phone}
            </p>
            <p className="card-text">
              <i className="fa-solid fa-envelope fa-fade"></i>
              {data.email}
            </p>
          </div>
        </div>

        <div className="col-md-2">
          <Link to="/demo">
            <button type="button" className="btn btn-outline-info m-1">
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
          </Link>

          <button
            type="button"
            className="btn btn-outline-danger m-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  Are you sure you want to delete this contact?
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >
                    Close
                  </button>
                  <button type="button" className="btn btn-danger"> Delete </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
