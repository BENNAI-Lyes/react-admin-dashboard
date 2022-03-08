import "./app.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <div className="app">
        <Topbar />
        <div className="coreAppContainer">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/newUser">
              <NewUser />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/newProduct">
              <NewProduct />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
