import React, { useState, useEffect } from "react";
import VideoList from "./VideoList";
import TMDB from "../api/TMDB";

const VideoContainer = ({ genre }) => {
  const [movies, setMovies] = useState([]);

  const BaseURL = "https://api.themoviedb.org/3/discover/movie?";
  useEffect(() => {
    const search = async () => {
      // const responce = await axios.get(
      //   BaseURL +
      //     "api_key=19f84e11932abbc79e6d83f82d6d1045" +
      //     "&language=en-US" +
      //     "&sort_by=popularity.desc" +
      //     "&include_adult=false" +
      //     "&include_video=false" +
      //     "&page=1" +
      //     `&with_genres=${genre.id}`
      // );
      const responce = await TMDB.get("", {
        params: {
          language: "en",
          sort_by: "popularity.desc",
          include_adult: "false",
          include_video: "false",
          page: 1,
          with_genres: genre.id,
        },
      });
      setMovies(responce.data.results);
      console.log(responce.data.results);
    };
    search();
  }, []);

  const text = genre.name.split("_").join(" ").toUpperCase();

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
        {text}
      </label>
      <VideoList movies={movies} />
    </div>
  );
};

export default VideoContainer;
