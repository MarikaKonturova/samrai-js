import React from "react";
import { Preloader } from "../common/Preloader/Preloader";
import s from "./Users.module.css";
import { Link } from "react-router-dom";
import { Paginator } from './../common/Paginator/Paginator';

export const Users = (props) => {
  if (props.isFetching) {
    return <Preloader />;
  }
  
  return (
    <div className={s.pages}>
      <Paginator totalItemsCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
/>
      {props.users.map((u) => (
        <div key={`${u.id}`} className={s.user_container}>
          <span>
            <img
              src={u.photos.small !== null ? u.photos.small : ""}
              className={s.userPhoto}
              alt={"avatar"}
            />
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                  disabled={props.inFollowingProgress.some((id) => id === u.id)}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                  disabled={props.inFollowingProgress.some((id) => id === u.id)}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <Link to={`/profile/${u.id}`}>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
            </Link>
          </span>
        </div>
      ))}
    </div>
  );
};
