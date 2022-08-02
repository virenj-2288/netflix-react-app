import React from "react";
import "../css/style.css";
import netflixIcon from "../images/netflix.png";

const Header = () => {
  return (
    <div>
      <header class="showcase">
        {/* <div class="showcase-top">
          <img src="https://i.ibb.co/r5krrdz/logo.png" alt="" />
          <a href="#" class="btn btn-rounded">
            Sign In
          </a>
        </div> */}

        <nav className="netflix-navbar">
          <div className="navbar-left">
            {/* {/* <div className="navbar-logo"> */}
            <img
              className="netflix-img"
              src={netflixIcon}
              alt="Netflix Logo"
              width="50px"
              height="50px"
            />
            {/* </div> */}
            <div className="navbar-list">
              <ui className="navbar-ui">
                <li className="nav-li">Home</li>
                <li className="nav-li">TV Shows</li>
                <li className="nav-li">Movies</li>
                <li className="nav-li">New & Popular</li>
                <li className="nav-li">Audio & Subtitles</li>
              </ui>
            </div>
          </div>
          <div className="navbar-rigth">
            {/* <i classname="search"></i> */}
            <i classname="searchIcon fas fa-search"></i>
            <p> fjkjklfjkljklfjkjfkljdkljfkljkldfjklfjklj</p>
          </div>
        </nav>

        {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img
                className="img-netflix ml-1"
                src={netflixIcon}
                alt="Netflix"
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    TV Shows
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Movies
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled">My List</a>
                </li>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav> */}
        {/* <nav className="navbar">
        
        <form className="form-navbar">
          <input
            className="search-type"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button> Submit </button>
        </form>
      </nav> */}

        {/* <div class="showcase-content">
          <h1>See what's next</h1>
          <p>Watch anywhere. Cancel Anytime</p>
          <a href="#" class="btn btn-xl">
            Watch Free For 30 Days <i class="fas fa-chevron-right btn-icon"></i>
          </a>
        </div> */}
      </header>
    </div>
  );
};

export default Header;
