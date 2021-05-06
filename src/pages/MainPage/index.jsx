import React from "react";
import Nav from "../../components/Nav";

import "./MainPageStyles.scss";

const MainPage = () => {
  return (
    <div className="mainPage">
      <Nav />
      <div className="mainPage__inner">
        <h1 className="mainPage__title">
          Фильмы, сериалы и многое другое без ограничений.
        </h1>
        <h2 className="mainPage__subtitle">
          Смотрите где угодно. Отменить подписку можно в любое время.
        </h2>
        <form className="mainPage__form">
          <h3 className="mainPage__form-title">
            Готовы смотреть? Введите адрес электронной почты, чтобы оформить или
            возобновить подписку.
          </h3>
          <div className="mainPage__wrapper">
            <input
              className="mainPage__input"
              type="email"
              placeholder="Введите адрес электронной почты"
            />
            <button className="mainPage__btn">Начать смотреть</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MainPage;
