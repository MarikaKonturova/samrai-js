import axios from "axios";
import s from "./Users.module.css";
import React from "react";

class Users extends React.Component {
  componentDidMount() {
    console.log("mounted");
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  onPageChanged = async(p) => {
    console.log(p)
    this.props.setCurrentPage(p);
    axios
    .get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`
    )
    .then((response) => {
      this.props.setUsers(response.data.items);
    });
  };

  render() {
    const pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        {pages.map((p) => (
          <span
            onClick={(e) => {
              this.onPageChanged(p);
            }}
            className={p === this.props.currentPage ? s.selectedPage : ""}
          >
            {p}
          </span>
        ))}
        {this.props.users.map((u) => (
          <div key={`${u.id}`}>
            <span>
              <img
                src={u.photos.small !== null ? u.photos.small : ""}
                className={s.userPhoto}
                alt={"avatar"}
              />
              <div>
                {u.followed ? (
                  <button onClick={() => this.props.unfollow(u.id)}>
                    Unfollow
                  </button>
                ) : (
                  <button onClick={() => this.props.follow(u.id)}>
                    Follow
                  </button>
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
  }
}

export default Users;
