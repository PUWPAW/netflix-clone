import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import LayoutMainPage from "../../components/LayoutMainPage";
import { registrationAtction } from "../../redux/actions/actionCreators";

import "./MainPageStyles.scss";

const MainPage = () => {
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const isInvalid = value === "" ? true : false;

  const changeInputHandler = (e) => {
    setValue(e.target.value);
  };

  const registrationHandler = (e) => {
    e.preventDefault();
    dispatch(registrationAtction(value));
    history.push("/signup");
  };

  return (
    <LayoutMainPage>
      <h1 className="title">
        Фильмы, сериалы и многое другое без ограничений.
      </h1>
      <h2 className="subtitle">
        Смотрите где угодно. Отменить подписку можно в любое время.
      </h2>
      <form className="form">
        <h3 className="form__title">
          Готовы смотреть? Введите адрес электронной почты, чтобы оформить или
          возобновить подписку.
        </h3>
        <div className="form__wrapper">
          <input
            value={value}
            onChange={changeInputHandler}
            className="form__input"
            type="email"
            placeholder="Введите адрес электронной почты"
          />
          <button
            className="form__btn"
            onClick={registrationHandler}
            disabled={isInvalid}>
            Начать смотреть
          </button>
        </div>
      </form>
    </LayoutMainPage>
  );
};

export default MainPage;
