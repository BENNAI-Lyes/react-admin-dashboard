import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.scss";

export default function User() {
  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="user">
      <div className="titleContainer">
        <h1 className="title">Edit User</h1>
        <Link to="/newUser">
          <button className="addButton">Create</button>
        </Link>
      </div>
      <div className="container">
        <div className="show">
          <div className="top">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="img"
            />
            <div className="userTitle">
              <span className="username">Anna Becker</span>
              <span className="job">Software Engineer</span>
            </div>
          </div>
          <div className="bottom">
            <span className="bottomTitle">Account Details</span>
            <div className="info">
              <PermIdentity className="icon" />
              <span className="title">annabeck99</span>
            </div>
            <div className="info">
              <CalendarToday className="icon" />
              <span className="title">10.12.1999</span>
            </div>
            <span className="bottomTitle">Contact Details</span>
            <div className="info">
              <PhoneAndroid className="icon" />
              <span className="title">+1 123 456 67</span>
            </div>
            <div className="info">
              <MailOutline className="icon" />
              <span className="title">annabeck99@gmail.com</span>
            </div>
            <div className="info">
              <LocationSearching className="icon" />
              <span className="title">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="update">
          <span className="title">Edit</span>
          <form className="form" onSubmit={handelSubmit}>
            <div className="left">
              <div className="item">
                <label>Username</label>
                <input type="text" placeholder="annabeck99" className="input" />
              </div>
              <div className="item">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="input"
                />
              </div>
              <div className="item">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="input"
                />
              </div>
              <div className="item">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="input"
                />
              </div>
              <div className="item">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="input"
                />
              </div>
            </div>
            <div className="right">
              <div className="upload">
                <img
                  className="img"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="updateButton" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
