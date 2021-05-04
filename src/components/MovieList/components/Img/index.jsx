import React from "react";
import { IMG_PATH } from "../../../../consts";
import plug from "../../../../images/plug.jpg";

import "./ImgStyles.scss";

const Img = ({ src, alt, isLarge }) => {
  return src ? (
    <img
      className={`img ${isLarge ? "img-large" : "img-small"}`}
      src={IMG_PATH + src}
      alt={alt}
    />
  ) : (
    <img
      className={`img ${isLarge ? "img-large" : "img-small"}`}
      src={plug}
      alt={alt}
    />
  );
};

export default Img;
