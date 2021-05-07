import React from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../lib/firebase";
import LayoutMainPage from "../LayoutMainPage";

import "./SignInStyles.scss";

const SignIn = () => {
  const history = useHistory();

  const emailRef = React.useRef("");
  const passwordRef = React.useRef("");

  const signInHandler = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        history.push("/home");
      })
      .catch((e) => console.log("error - ", e.message));
  };

  return (
    <LayoutMainPage>
      <div className="signin">
        <h1 className="signin__title">Вход</h1>
        <form className="signin__form">
          <input
            className="signin__input"
            type="email"
            placeholder="Email"
            ref={emailRef}
          />
          <input
            className="signin__input"
            type="password"
            placeholder="Пароль"
            ref={passwordRef}
          />
          <button className="signin__btn" type="submit" onClick={signInHandler}>
            Войти
          </button>

          <p className="signin__text">
            Все еще нет аккаунта?
            <Link className="signin__link" to="/signup">
              Регистрируйся!
            </Link>
          </p>
        </form>
      </div>
    </LayoutMainPage>
  );
};

export default SignIn;
