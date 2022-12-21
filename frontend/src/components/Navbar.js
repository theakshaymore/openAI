import React from "react";
import AM from "../imgs/AM.jpg";

function Navbar() {
  return (
    <div className="my-navbar">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 shadow-lg rounded">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={AM} alt="AM" width="40" height="40" />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a href="#learn" className="btn btn-secondary fw-bold">
                  Get Code
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
