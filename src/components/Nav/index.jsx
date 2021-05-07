import React from "react";
import { useSelector } from "react-redux";
import logo from "../../images/logo.svg";
import account from "../../images/account.png";

import "./NavStyles.scss";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Nav = () => {
  const login = useSelector(({ auth }) => auth.login);
  const history = useHistory();
  const [show, setShow] = React.useState(false);

  const showHandler = () => {
    if (window.pageYOffset > 80) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const signInHandler = () => {
    history.push("/signin");
  };

  React.useEffect(() => {
    window.addEventListener("scroll", showHandler);

    return () => {
      window.removeEventListener("scroll", showHandler);
    };
  }, []);

  return (
    <nav className={`${show ? "nav nav_bg" : "nav"}`}>
      <Link to={`${login ? "/home" : "/"}`}>
        <img className="nav__logo" src={logo} alt="netflix-logo" />
      </Link>
      {!login ? (
        <button className="nav__btn" onClick={signInHandler}>
          Войти
        </button>
      ) : (
        <Link to="/profile">
          <img className="nav__account" src={account} alt="account-img" />
        </Link>
      )}
    </nav>
  );
};

export default Nav;
