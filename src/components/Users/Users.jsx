import React from "react";
import { Preloader } from "../common/Preloader/Preloader";
import s from "./Users.module.css";
import { Link } from "react-router-dom";
import { usersAPI } from "../../api/api";
import  axios  from "axios";

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
    <div className={s.pages}>
      {pages.map((p) => (
        <span
          key={p}
          onClick={(e) => {
            props.onPageChanged(p);
          }}
          className={p === props.currentPage ? s.selectedPage : ""}
        >
          {p}
        </span>
      ))}
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
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/unfollow/${u.id}`,
                        {
                          // как зарегистрированный пользователь
                          withCredentials: true,
                          headers: {
                            "API-KEY": "",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollow(u.id);
                        }
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                        {},
                        {
                          // как зарегистрированный пользователь
                          withCredentials: true,
                          headers: {
                            "API-KEY": "",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.follow(u.id);
                        }
                      });
                  }}
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
