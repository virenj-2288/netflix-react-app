import React from "react";

const VideoItem = ({ movie }) => {
  // `https://image.tmdb.org/t/p/original${movie[path_type]}`
  return (
    <img
      className="videoImg"
      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      alt={movie.original_title}
      style={{
        height: "150px",
        width: "230px",
        marginLeft: "2px",
        marginRight: "2px",
        borderRadius: "4px",
      }}
    />
  );
};

export default VideoItem;
