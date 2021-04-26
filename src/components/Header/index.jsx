import React from "react";
import { truncate } from "../../utils/truncate";
import axios from "../../utils/axios";

import "./HeaderStyles.scss";
import { IMG_PATH, requests } from "../../consts";
import useRequest from "../../hooks/useRequest";

const Header = () => {
  const [movie, loading, error] = useRequest(
    axios.get(requests.fetchNetflixOriginals),
    true
  );

  return (
    <header
      className="header"
      style={{
        backgroundImage: `url(${IMG_PATH + movie?.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}>
      <div className="header__inner">
        <h1 className="header__titel">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="header__descr">{truncate(movie?.overview, 200)}</div>
        <div className="header__btns">
          <button className="header__btn">Play</button>
          <button className="header__btn">More info</button>
        </div>
      </div>
      <div className="header_fade" />
    </header>
  );
};

export default Header;
