import React, { Suspense } from "react";
import axios from "../../../../utils/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import "./RowStyles.scss";

const Img = React.lazy(() => import("../Img"));

const Row = ({ genre, request, isLarge }) => {
  const [offset, setOffset] = React.useState(0);
  const [count, setCount] = React.useState(6);
  const [movies, setMovies] = React.useState([]);

  const step = 140;
  const maxOffset = 3080;

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(request);
        const { data } = response;
        setMovies(data.results);
      } catch (e) {
        console.log(e);
      }
    }

    fetchData();
  }, [request]);

  const offsetNextHandler = () => {
    setOffset((current) => {
      const res = current === maxOffset ? 0 : current + step;
      return res;
    });
    setCount(
      (prev) => (prev = movies.length > prev ? prev + 1 : movies.length)
    );
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
      <Suspense fallback={<div style={{ color: "white" }}>Loading...</div>}>
        <div style={{ left: -offset + "px" }} className="row__inner">
          {movies &&
            movies
              .slice(0, count)
              .map((movie) => (
                <Img
                  key={movie.id}
                  src={isLarge ? movie.poster_path : movie.backdrop_path}
                  isLarge={isLarge}
                  alt={movie.name || movie.original_title || movie.title}
                />
              ))}
        </div>
      </Suspense>

      <FontAwesomeIcon
        className="btn btn__prev"
        name="prev"
        disabled={offset === 0}
        onClick={offsetPrevHandler}
        icon={faChevronLeft}
        color={offset === 0 ? "grey" : "white"}
        size="lg"
      />

      <FontAwesomeIcon
        className="btn btn__next"
        name="next"
        onClick={offsetNextHandler}
        icon={faChevronRight}
        color="white"
        size="lg"
      />
    </div>
  );
};

export default Row;
