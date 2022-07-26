import React, { useState } from "react";
import VideoItem from "./VideoItem";
import axios from "axios";
import "../css/VideoList.css";

const VideoList = ({ movies }) => {
  const movieJsx = movies.map((movie) => {
    return <VideoItem key={movie.id} movie={movie} />;
  });

  return <div className="VideoList">{movieJsx}</div>;
};

export default VideoList;
