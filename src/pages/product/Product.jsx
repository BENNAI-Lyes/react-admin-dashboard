import "./product.scss";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productData } from "../../data";

export default function Product() {
  const handelSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="product">
      <div className="titleContainer">
        <h1 className="title">Product</h1>
        <Link to="/newProduct">
          <button className="addButton">Create</button>
        </Link>
      </div>
      <div className="productContainer">
        <div className="top">
          <div className="left">
            <Chart
              title="Sales Performance"
              data={productData}
              dataKey="Sales"
            />
          </div>
          <div className="right">
            <div className="top">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />
              <h4>Apple Airpods</h4>
            </div>
            <div className="bottomInfo">
              <div>
                <span className="key">Id:</span>
                <span className="value">123</span>
              </div>
              <div>
                <span className="key">Sales:</span>
                <span className="value">12653</span>
              </div>
              <div>
                <span className="key">Active:</span>
                <span className="value">yes</span>
              </div>
              <div>
                <span className="key">In Stock:</span>
                <span className="value">Yes</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <form className="form">
              <div className="group">
                <label htmlFor="name">Product Name</label>
                <input type="text" placeholder="Apple Airpods" />
              </div>
              <div className="group">
                <label htmlFor="inStock">In stock</label>
                <select name="inStock" id="inStock">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="group">
                <label htmlFor="active">Active</label>
                <select name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </form>
          </div>
          <div className="right">
            <div className="top">
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              />

              <label htmlFor="productImg">
                <Publish className="icon" />
              </label>
              <input type="file" id="productImg" style={{ display: "none" }} />
            </div>
            <button className="update">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
}
