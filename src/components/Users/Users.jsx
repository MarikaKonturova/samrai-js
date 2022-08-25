import { React } from "react";
import s from "./Users.module.css";

export const Users = (props) => {
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <img
              src={''}
              className={s.userPhoto}
              alt={"avatar"}
            />
            <div>
              {u.followed ? (
                <button onClick={() => props.unfollow(u.id)}>
                  Unfollow
                </button>
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
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
