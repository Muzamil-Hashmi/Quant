import React from 'react'

export default function Built() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
        <img className="img-fluid" data-aos="fade-down" src="assets/house.png" alt=" " />


        </div>
        <div className="col-md-6 ">
          <h1 className='display-1 fw-bold'data-aos="zoom-out-right">Built for enterprises</h1>
          <p>
          Led by an experienced team from large corporate, financial and regulatory institutions, we enable existing financial infrastructure to operate with new decentralised networks
          </p>
          <button className='button'>Find Out More</button>
        </div>
      </div>
    </div>
  )
}
