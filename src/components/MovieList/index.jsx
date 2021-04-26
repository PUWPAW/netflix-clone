import React from "react";
import Row from "./components";

import { requests } from "../../consts";

import "./MovieListStyles.scss";

const MovieList = () => {
  return (
    <main className="movieList">
      <Row
        genre="Netflix originals"
        request={requests.fetchNetflixOriginals}
        isLarge
      />
      <Row genre="Trending" request={requests.fetchTrending} />
      <Row genre="Top rated" request={requests.fetchTopRated} />
      <Row genre="Action movies" request={requests.fetchActionMovies} />
      <Row genre="Comedy movies" request={requests.fetchComedyMovies} />
      <Row genre="Horror movies" request={requests.fetchHorrorMovies} />
      <Row genre="Romance movies" request={requests.fetchRomanceMovies} />
      <Row genre="Documentaries" request={requests.fetchDocumentaries} />
    </main>
  );
};

export default MovieList;
