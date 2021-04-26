import React from "react";
import axios from "../../../utils/axios";
import { IMG_PATH } from "../../../consts";

import "./RowStyles.scss";

const Row = ({ genre, request, isLarge }) => {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`${request}`);
      const { data } = response;
      setMovies(data.results);
    }
    fetchData();
  }, [request]);

  return (
    <div className="row">
      <h2 className="row__title">{genre}</h2>
      <div className="row__inner">
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
            ) : null
          )}
      </div>
    </div>
  );
};

export default Row;
