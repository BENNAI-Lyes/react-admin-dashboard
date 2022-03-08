import Chart from "../../components/chart/Chart";
import { Widgets } from "./../../components/widgets/Widgets";
import { userData } from "../../data";

import "./home.scss";
import NewMembers from "../../components/newMembers/NewMembers";
import LastTransictions from "../../components/lastTransictions/LastTransictions";

export default function Home() {
  return (
    <div className="home">
      <div className="wrapper">
        <Widgets />
        <Chart
          data={userData}
          dataKey="Active User"
          grid
          title="User Analytics"
        />
        <div className="container">
          <NewMembers />
          <LastTransictions />
        </div>
      </div>
    </div>
  );
}
