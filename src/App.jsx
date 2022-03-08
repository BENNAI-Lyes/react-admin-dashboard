import "./app.scss";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="coreAppContainer">
        <Sidebar />
        <div className="pages">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
