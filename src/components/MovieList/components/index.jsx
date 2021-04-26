import React from "react";
import axios from "../../../utils/axios";
import { IMG_PATH } from "../../../consts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import useRequest from "../../../hooks/useRequest";

import plug from "../../../images/plug.jpg";
import "./RowStyles.scss";

const Row = ({ genre, request, isLarge }) => {
  const [offset, setOffset] = React.useState(0);
  const [movies, loading, error] = useRequest(axios.get(`${request}`));

  const step = 140;
  const maxOffset = 3080;

  const offsetNextHandler = () => {
    setOffset((current) => {
      const res = current === maxOffset ? 0 : current + step;
      return res;
    });
  };

  const offsetPrevHandler = () => {
    setOffset((current) => {
      const res = current === 0 ? maxOffset : current - step;
      return res;
    });
  };

  return (
    <div className="row">
      <h2 className="row__title">{genre}</h2>
      <div style={{ left: -offset + "px" }} className="row__inner">
        {movies &&
          movies.map((movie) =>
            (isLarge && movie.poster_path) ||
            (!isLarge && movie.backdrop_path) ? (
              <img
                key={movie.id}
                className="row__img"
                src={
                  isLarge
                    ? IMG_PATH + movie?.poster_path
                    : IMG_PATH + movie?.backdrop_path
                }
                alt={movie.original_title}
              />
            ) : (
              <img
                key={movie.id}
                className="row__img"
                src={plug}
                alt={movie.original_title}
              />
            )
          )}
      </div>
      <button className="btn btn__prev" onClick={offsetPrevHandler}>
        <FontAwesomeIcon icon={faChevronLeft} color="white" size="lg" />
      </button>
      <button className="btn btn__next" onClick={offsetNextHandler}>
        <FontAwesomeIcon icon={faChevronRight} color="white" size="lg" />
      </button>
    </div>
  );
};

export default Row;
