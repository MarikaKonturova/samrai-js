import axios from "axios";
import s from "./Users.module.css";
import  React  from 'react';
class Users extends React.Component {

  getUsers =  ()=>{
    if (!this.props.users.length) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    }
  }
  

  render (){return (

    <div>
      <button onClick={this.getUsers}>Get Users</button>
      {this.props.users.map((u) => (
        <div key={u.id}>
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
                <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
  );}
}

export default Users;
