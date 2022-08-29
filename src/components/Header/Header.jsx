import React from "react";
import logo from "../../logo.svg";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

export const Header = (props) => {
  return (
    <header className={s.header}>
      <img src={logo} alt="logo" />

      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div className={s.item}>
            {props.login} - <button onClick={props.logout}>Logout</button>
          </div>
        ) : (
          <NavLink to={"/login"} className={s.item}>
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};
