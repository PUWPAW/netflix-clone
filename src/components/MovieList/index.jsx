import React, { Suspense } from "react";

import { requests } from "../../consts";

import "./MovieListStyles.scss";

const Row = React.lazy(() => import("./components/Row"));

const MovieList = () => {
  return (
    <main className="movieList">
      <Suspense fallback={<div style={{ color: "white" }}>Loading..</div>}>
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
      </Suspense>
    </main>
  );
};

export default MovieList;
