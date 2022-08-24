import React from "react";
import logo from "../../../../logo.svg";
import s from "./MyPost.module.css";
export const MyPost = ({message, likes}) => {
  return (
    <div className={s.item}>
      <img src={logo} alt="" />
      {message}
      <div>
        <span>likes {likes}</span>
      </div>
    </div>
  );
};
