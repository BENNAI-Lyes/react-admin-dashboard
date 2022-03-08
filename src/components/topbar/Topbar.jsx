import "./topbar.scss";
import { Notifications, Language, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
      <Link to="/">
        <div className="left">LyesAdmin</div>
      </Link>
      <div className="right">
        <div className="iconContainer">
          <Notifications className="icon" />
          <span className="badge">1</span>
        </div>
        <div className="iconContainer">
          <Language className="icon" />
          <span className="badge">2</span>
        </div>
        <div className="iconContainer">
          <Settings className="icon" />
        </div>

        <img
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          alt=""
          className="profileImg"
        />
      </div>
    </div>
  );
}
