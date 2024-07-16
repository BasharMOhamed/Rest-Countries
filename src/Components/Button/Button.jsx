import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";
const Button = ({ content, path }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(path);
  };
  return (
    <button
      className="btn"
      onClick={clickHandler}
      dangerouslySetInnerHTML={{ __html: content }}
    ></button>
  );
};

export default Button;
