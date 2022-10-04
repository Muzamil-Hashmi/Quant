import React from "react";
import { Link } from "react-router-dom";
// import Section from '../element/Section'
export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container text-dark">
        <a className="navbar-brand" href="#">
          <img src="assets/download.png" alt=" " width={100} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                Who
              </a>
              <ul>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  sed provident quae voluptatum. Reprehenderit modi ratione
                  placeat ut. Illo porro nihil quae incidunt recusandae neque
                  consequatur, laboriosam consequuntur fuga et.
                </p>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-5" href="#">
                What
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                How
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-5" href="#">
                Why
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link ">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-5 ">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
