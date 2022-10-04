import React, { Component } from "react";

export class Hero extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div >
              <h1 className="display-1 fw-bold" > <span data-aos="zoom-out-rigth"> The   future of</span> <span  data-aos="fade-left"> finance. </span></h1>
              <span className="display-1 fw-bold text-danger" data-aos="zoom-in-right">Today.</span>
            </div>
            <button className="button " >Get start</button>
          </div>
          <div className="col-md-6">
            <video
              className="video "
              height={500}
              src="https://player.vimeo.com/progressive_redirect/playback/704523096/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1621192039&signature=18c4ba7681d88b274d7709ed6a7834c6e3876a8dcbf259bb8f4d5b7982b656c1 "
              autoPlay
              muted
              loop
              style={{ width: "50vw" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
