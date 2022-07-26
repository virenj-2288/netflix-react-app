import React from "react";
import axios from "axios";

import Header from "./component/Header";
import Footer from "./component/Footer";
import VideoSection from "./component/VideoSection";

// import logo from "./logo.svg";
// import './App.css';

function App() {
  // GenreList.map((element) => {

  //   axios.get(`${API_END_POINT}discover/movielanguage=en
  //      &with_genres=${element.id}
  //      &include_adult=false&append_to_response=images
  //      &${API_KEY}`
  // const getMovie = (genres) => {
  //   genres.map((genre) => {
  //     fetchMovieBasedOnGenre(genre.id);
  //   });
  // };

  return (
    <div className="App" style={{ background: "#2E2E2E" }}>
      <Header />
      <VideoSection genre="top_rated" />
      <div style={{ height: "1000px" }}></div>
      <Footer />
    </div>
  );
}

export default App;
