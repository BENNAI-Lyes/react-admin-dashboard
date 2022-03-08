import { Publish } from "@material-ui/icons";
import "./newProduct.scss";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h2>New Product</h2>
      <form className="form">
        <div className="group">
          <label htmlFor="productImg">
            Image <Publish className="icon" />
          </label>
          <input type="file" id="productImg" style={{ display: "none" }} />
        </div>
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

        <div className="group">
          <button className="add">Add</button>
        </div>
      </form>
    </div>
  );
}
