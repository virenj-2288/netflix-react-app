import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoList from "./VideoList";

const VideoContainer = ({ genre }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const search = async () => {
      const responce = await axios.get(
        // "https://api.themoviedb.org/3/genre/movie/list?api_key=d7695a828fd4653146f5f0be410a47a1"
        `https://api.themoviedb.org/3/movie/${genre}?api_key=d7695a828fd4653146f5f0be410a47a1&language=en-US&page=1`
      );
      // getMovie(responce.data.genres);
      // console.log(responce.data);
      setMovies(responce.data.results);
      //   console.log(responce.data.results);
    };
    search();
  }, []);

  const text = genre.split("_").join(" ").toUpperCase();

  return (
    <div style={{ margin: "10px 0px 10px 50px" }}>
      <label
        style={{
          margin: "10px 0px",
          background: "transparent",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {" "}
        {text}
      </label>
      {/* <button onClick={onClick}>click</button> */}
      <VideoList movies={movies} />
    </div>
  );
};

export default VideoContainer;
