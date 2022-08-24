import React from "react";
import { Link } from "react-router-dom";
import s from './Navbar.module.css'
import { Dialogs } from './../Dialogs/Dialogs';
export const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <Link to={'/profile'} >Profile</Link>
      </div>
      <div className={s.item}>
        <Link to={'/dialogs'}>Dialogs</Link>
      </div>
      <div className={s.item}>
        <Link to={'/news'}>News</Link>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <Link to={'/music'}>Music</Link>
      </div>
      <div className={s.item}>
        <Link to={'/settings'}>Settings</Link>
      </div>
    </nav>
  );
};
