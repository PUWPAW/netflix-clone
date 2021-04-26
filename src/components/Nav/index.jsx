import React from "react";
import logo from "../../images/logo.svg";
import account from "../../images/account.png";

import "./NavStyles.scss";

const Nav = () => {
  const [show, setShow] = React.useState(false);

  const showHandler = () => {
    if (window.pageYOffset > 80) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", showHandler);

    return () => {
      window.removeEventListener("scroll", showHandler);
    };
  }, []);

  return (
    <nav className={`${show ? "nav nav_bg" : "nav"}`}>
      <img className="nav__logo" src={logo} alt="netflix-logo" />
      <img className="nav__account" src={account} alt="account-img" />
    </nav>
  );
};

export default Nav;
