import React from "react";

import "./HeaderStyles.scss";

const Header = () => {
  const truncate = (str, num) => {
    return str?.length > num ? str.substr(0, num - 1) + "..." : str;
  };

  return (
    <div
      className="header"
      style={{
        backgroundImage: `url("https://static-sl.insales.ru/images/products/1/3293/205327581/68a001396893074dbda1be1cea4ae695ee2c0e3b.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}>
      <div className="header__inner">
        <h1 className="header__titel">Movie title</h1>
        <div className="header__descr">
          {truncate(
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illum
          earum pariatur officiis nesciunt ipsa consequuntur ratione consectetur
          voluptatibus. Ab?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolores illum earum pariatur officiis nesciunt ipsa consequuntur
          ratione consectetur voluptatibus. Ab?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolores illum earum pariatur officiis
          nesciunt ipsa consequuntur ratione consectetur voluptatibus. Ab?Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Dolores illum earum
          pariatur officiis nesciunt ipsa consequuntur ratione consectetur
          voluptatibus. Ab?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolores illum earum pariatur officiis nesciunt ipsa consequuntur
          ratione consectetur voluptatibus. Ab?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolores illum earum pariatur officiis
          nesciunt ipsa consequuntur ratione consectetur voluptatibus. Ab?Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Dolores illum earum
          pariatur officiis nesciunt ipsa consequuntur ratione consectetur
          voluptatibus. Ab?`,
            200
          )}
        </div>
        <div className="header__btns">
          <button className="header__btn">Play</button>
          <button className="header__btn">More info</button>
        </div>
      </div>
      <div className="header_fade" />
    </div>
  );
};

export default Header;
