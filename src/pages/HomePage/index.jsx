import React from "react";
import Header from "../../components/Header";
import MovieList from "../../components/MovieList";
import Nav from "../../components/Nav";

import "./HomePageStyles.scss";

const HomePage = () => {
  return (
    <>
      <Nav />
      <Header />
      <MovieList />
    </>
  );
};

export default HomePage;
