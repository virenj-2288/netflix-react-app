import React, { useState, useEffect } from "react";
import VideoContainer from "./VideoContainer";
import axios from "axios";

const VideoSection = () => {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US"
      );
      setGenres(data.genres);
      console.log(data.genres);
    };
    search();
  }, []);

  const genresVideoItem = genres.map((genre, index) => {
    return <VideoContainer key={genre.id} genre={genre} />;
  });
  return <div>{genresVideoItem}</div>;
};

export default VideoSection;
