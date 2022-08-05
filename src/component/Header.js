import React, { useState, useRef, useEffect } from "react";
import "../css/style.css";
import netflixIcon from "../images/netflix.png";
import { FaBell, FaBlackTie } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { IoMdArrowDropdown } from "react-icons/io";
import ProfileLogo from "../images/witcherLogo.jpg";

const Header = () => {
  const inputRef = useRef();
  const [isSearchBoxOpen, setSearchBoxOpen] = useState(false);

  useEffect(() => {
    const onBodyClick = (event) => {
      if (inputRef.current.contains(event.target)) {
        return;
      }
      setSearchBoxOpen(false);
    };
    document.body.addEventListener("click", onBodyClick);
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const onSearchBoxClick = (event) => {
    if (inputRef.current.children["searchInput"] != event.target) {
      setSearchBoxOpen(!isSearchBoxOpen);
    }
  };
  const openStyles = {
    background: "black",
    border: "1px solid #E8E8E8",
    // width: "270px",
    width: "auto",
    height: "35px",
    verticalAlign: "middle",
    display: "inline-block",
    opacity: 0.9,
    // transition: "1s",
    // transition: "all 3s linear",

    // animationName: "example",
    // animationDuration: "5s",
    // animationTimingFunction: "ease-in-out",
    // animationDelay: "5s",
    // animationIterationCount: "infinite",
    // animationDirection: "alternate",
    // transition: "3s",
  };
  const closeStyles = {
    background: "transparent",
    border: "none",
    // width: "270px",
    // width: "50px",

    // transition: "1s",
  };
  return (
    <div>
      <header className="showcase">
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
            <div
              className="search-box"
              ref={inputRef}
              // style={isSearchBoxOpen ? styles : { transition: "3s" }}
              style={isSearchBoxOpen ? openStyles : closeStyles}
              onClick={onSearchBoxClick}
            >
              <button type="button" className="btn" id="search">
                <ImSearch />
              </button>
              <input
                type="text"
                id="searchInput"
                placeholder="Titles, people, genres"
                name="searchInput"
                className="search-input"
                style={
                  isSearchBoxOpen
                    ? {
                        visibility: "visible",
                        // display: "",
                        width: "270px",
                        color: "#E8E8E8",
                        transition: "1s",
                      }
                    : {
                        visibility: "hidden",
                        // display: "none",
                        width: "0px",
                        color: "none",
                        transition: "1s",
                      }
                }
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
