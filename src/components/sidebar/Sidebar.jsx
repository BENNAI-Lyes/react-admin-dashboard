import "./sidebar.scss";
import {
  Home,
  Timeline,
  TrendingUp,
  Person,
  Redeem,
  AttachMoney,
  Poll,
  Mail,
  Feedback,
  Message,
  Report,
  CardTravel,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="wrapper">
        <div className="item">
          <h3 className="title">Dashboard</h3>
          <ul className="list">
            <Link to="/">
              <li className="active">
                <Home className="icon" />
                <span>Home</span>
              </li>
            </Link>
            <li>
              <Timeline className="icon" />
              <span>Analytics</span>
            </li>
            <li>
              <TrendingUp className="icon" />
              <span>Sales</span>
            </li>
          </ul>
        </div>
        <div className="item">
          <h3 className="title">Quick Menu</h3>
          <ul className="list">
            <Link to="/users">
              <li>
                <Person className="icon" />
                <span>Users</span>
              </li>
            </Link>
            <Link to="/products">
              <li>
                <Redeem className="icon" />
                <span>Products</span>
              </li>
            </Link>
            <li>
              <AttachMoney className="icon" />
              <span>Transactions</span>
            </li>
            <li>
              <Poll className="icon" />
              <span>Reports</span>
            </li>
          </ul>
        </div>
        <div className="item">
          <h3 className="title">Notifications</h3>
          <ul className="list">
            <li>
              <Mail className="icon" />
              <span>Mail</span>
            </li>
            <li>
              <Feedback className="icon" />
              <span>Feedback</span>
            </li>
            <li>
              <Message className="icon" />
              <span>Messages</span>
            </li>
          </ul>
        </div>
        <div className="item">
          <h3 className="title">Stuff</h3>
          <ul className="list">
            <li>
              <CardTravel className="icon" />
              <span>Manage</span>
            </li>
            <li>
              <Timeline className="icon" />
              <span>Analytics</span>
            </li>
            <li>
              <Report className="icon" />
              <span>Reports</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
