import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../lib/firebase";
import LayoutMainPage from "../LayoutMainPage";

import "./SignUpStyles.scss";

const SignUp = () => {
  const email = useSelector(({ auth }) => auth.email);
  const [value, setValue] = React.useState(email);
  const history = useHistory();

  const nameRef = React.useRef("");
  const emailRef = React.useRef("");
  const passwordRef = React.useRef("");

  const inputHandler = (e) => {
    setValue(e.target.value);
  };

  const createUserHandler = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
        history.push("/home");
      })
      .catch((e) => console.log("error - ", e.message));
  };

  return (
    <LayoutMainPage>
      <div className="signup">
        <h1 className="signup__title">Регистрация</h1>
        <form className="signup__form">
          <input
            className="signup__input"
            type="text"
            placeholder="Ваше имя"
            ref={nameRef}
          />
          <input
            className="signup__input"
            type="email"
            placeholder="Email"
            value={value}
            onChange={inputHandler}
            ref={emailRef}
          />
          <input
            className="signup__input"
            type="password"
            placeholder="Пароль"
            ref={passwordRef}
          />
          <button
            className="signup__btn"
            type="submit"
            onClick={createUserHandler}>
            Зарегистрироваться
          </button>

          <p className="signup__text">
            Есть аккаунт?{" "}
            <Link className="signup__link" to="/signin">
              Заходи!
            </Link>
          </p>
        </form>
      </div>
    </LayoutMainPage>
  );
};

export default SignUp;
