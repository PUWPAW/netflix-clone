import React from "react";
import { IMG_PATH } from "../../../../consts";
import plug from "../../../../images/plug.jpg";

const Img = ({ movie, isLarge = false }) => {
  return (isLarge && movie.poster_path) || (!isLarge && movie.backdrop_path) ? (
    <img
      className="row__img"
      src={
        isLarge
          ? IMG_PATH + movie?.poster_path
          : IMG_PATH + movie?.backdrop_path
      }
      alt={movie.original_title}
    />
  ) : (
    <img className="row__img" src={plug} alt={movie.original_title} />
  );
};

export default Img;
