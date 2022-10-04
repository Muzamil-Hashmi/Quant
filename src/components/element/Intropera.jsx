import React from "react";

export default function Intropera() {
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col-md-6"> 
        <img className="img-fluid" src="assets/box.png" alt=" " />

        </div>

        <div className="col-md-6">
          <h1 className='display-5 fw-bold'data-aos="zoom-in-right">Interoperability solved</h1>
          <h4>
            Reduce costs and access wider markets by deploying any app on any
            blockchain. That’s the power of our single, standard, multi-chain
            API.
          </h4>
          <button className='button'>Find Out More</button>
        </div>
      </div>
    </div>
  );
}
