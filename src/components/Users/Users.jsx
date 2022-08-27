import React from "react";
import { Preloader } from "../common/Preloader/Preloader";
import s from "./Users.module.css";

export const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  if (props.isFetching) {
    return <Preloader />;
  }
  return (
    <div>
      {pages.map((p) => (
        <span
          onClick={(e) => {
            props.onPageChanged(p);
          }}
          className={p === props.currentPage ? s.selectedPage : ""}
        >
          {p}
        </span>
      ))}
      {props.users.map((u) => (
        <div key={`${u.id}`}>
          <span>
            <img
              src={u.photos.small !== null ? u.photos.small : ""}
              className={s.userPhoto}
              alt={"avatar"}
            />
            <div>
              {u.followed ? (
                <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              ) : (
                <button onClick={() => props.follow(u.id)}>Follow</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
