import React, { useRef } from "react";
import "../css/style.css";
import netflixIcon from "../images/netflix.png";
import { FaBell } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { IoMdArrowDropdown } from "react-icons/io";
import ProfileLogo from "../images/witcherLogo.jpg";

const Header = () => {
  const inputRef = useRef();

  const OnSearchClick = (event) => {
    // console.log(inputRef.current.style.visibility);

    if (inputRef.current.style.visibility === "hidden") {
      inputRef.current.style.visibility = "visible";
      inputRef.current.style.display = "";
    } else {
      inputRef.current.style.visibility = "hidden";
      inputRef.current.style.display = "none";
    }
    // console.log(inputRef.current.style);
    // console.log(event.target);
  };

  // const onInputClick = (event) => {
  //   inputRef.current.style.visibility = 'visible';
  //   inputRef.current.style.display = '';
  // }

  return (
    <div>
      {/* <header class="showcase"> */}
      {/* <header> */}
      {/* <div class="showcase-top">
          <img src="https://i.ibb.co/r5krrdz/logo.png" alt="" />
          <a href="#" class="btn btn-rounded">
            Sign In
          </a>
        </div> */}

      {/* <nav className="netflix-navbar"> */}
      {/* <div className="navbar-left"> */}
      {/* {/* <div className="navbar-logo"> */}
      {/* <img
              className="netflix-img"
              src={netflixIcon}
              alt="Netflix Logo"
              width="50px"
              height="50px"
            />
            <div className="navbar-list">
              <ui className="navbar-ui">
                <li className="nav-li">Home</li>
                <li className="nav-li">TV Shows</li>
                <li className="nav-li">Movies</li>
                <li className="nav-li">New & Popular</li>
                <li className="nav-li">Audio & Subtitles</li>
              </ui>
            </div> */}
      {/* </div> */}
      {/* <div className="navbar-rigth">
            <input
              type="text"
              placeholder="Search.."
              name="search"
              style={{ visibility: "hidden", inclusion: "hidden" }}
            />
            <button
              type="submit"
              className="btn navbar-right-item search"
              onClick={OnSearchClick}
            >
              <ImSearch />
            </button>
            <a href="#" className=" btn  navbar-right-item  children">
              Children
            </a>

            <button
              type="button"
              className="btn navbar-right-item  notifications"
            >
              <FaBell size={20} />
            </button>

            <button className="btn profile  navbar-right-item  notifications">
              <img className="profile-logo" src={ProfileLogo} atl="" />
              <IoMdArrowDropdown />
            </button>
          </div> */}
      {/* </nav> */}

      {/* <div class="showcase-content">
          <h1>See what's next</h1>
          <p>Watch anywhere. Cancel Anytime</p>
          <a href="#" class="btn btn-xl">
            Watch Free For 30 Days <i class="fas fa-chevron-right btn-icon"></i>
          </a>
        </div> */}
      {/* </header> */}

      <header className="showcase">

         {/* <div class="showcase-top">
          <img src="https://i.ibb.co/r5krrdz/logo.png" alt="" />
          <a href="#" class="btn btn-rounded">
            Sign In
          </a>
        </div> */}

        <nav className="netflix-navbar">
          <div className="navbar-left">
            <div className="navbar-logo">
              <img
                className="netflix-img"
                src={netflixIcon}
                alt="Netflix Logo"
                width="50px"
                height="50px"
              />
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
          </div>
          <div className="navbar-rigth">
            <div className="search-box">
              <button
                type="button"
                className="btn"
                onClick={OnSearchClick}
              >
                <ImSearch />
              </button>
              <input
                ref={inputRef}
                type="text"
                placeholder="Titles, people, genres"
                name="search"
                className="search-input"
                style={{
                  visibility: "hidden",
                  // inclusion: "hidden",
                  display: "none",
                }}
                // onClick = {onInputClick}
              />
            </div>

            <a href="#" className=" btn  navbar-right-item  children">
              Children
            </a>

            <button
              type="button"
              className="btn navbar-right-item  notifications"
            >
              <FaBell size={20} />
            </button>

            <button className="btn profile  navbar-right-item  notifications">
              <img className="profile-logo" src={ProfileLogo} atl="" />
              <IoMdArrowDropdown />
            </button>
          </div>
        </nav>
      </header>

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
    </div>
  );
};

export default Header;
