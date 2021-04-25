import React from "react";
import Header from "../../components/Header";
import MovieList from "../../components/MovieList";
import Nav from "../../components/Nav";

const HomePage = () => {
  return (
    <div>
      <h1>It is home page</h1>

      <Nav />
      <Header />
      <MovieList />
    </div>
  );
};

export default HomePage;
