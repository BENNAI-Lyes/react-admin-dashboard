import Button from "../button/Button";
import "./lastTransictions.scss";

export default function LastTransictions() {
  return (
    <div className="lastTransictions">
      <div className="wrapper">
        <h3 className="title">Last Transictions</h3>
        <table className="table">
          <tr>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>State</th>
          </tr>
          <tr>
            <td className="customer">
              <img
                src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                className="img"
                alt=""
              />
              <span className="name">Susan Carol</span>
            </td>
            <td className="date">2 Sep 2021</td>
            <td className="amount">$122,00</td>
            <td className="state">
              <Button name={"approved"} />
            </td>
          </tr>
          <tr>
            <td className="customer">
              <img
                src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                className="img"
                alt=""
              />
              <span className="name">Susan Carol</span>
            </td>
            <td className="date">2 Sep 2021</td>
            <td className="amount">$122,00</td>
            <td className="state">
              <Button name={"declined"} />
            </td>
          </tr>
          <tr>
            <td className="customer">
              <img
                src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                className="img"
                alt=""
              />
              <span className="name">Susan Carol</span>
            </td>
            <td className="date">2 Sep 2021</td>
            <td className="amount">$122,00</td>
            <td className="state">
              <Button name={"pending"} />
            </td>
          </tr>
          <tr>
            <td className="customer">
              <img
                src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                className="img"
                alt=""
              />
              <span className="name">Susan Carol</span>
            </td>
            <td className="date">2 Sep 2021</td>
            <td className="amount">$122,00</td>
            <td className="state">
              <Button name={"approved"} />
            </td>
          </tr>
          <tr>
            <td className="customer">
              <img
                src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                className="img"
                alt=""
              />
              <span className="name">Susan Carol</span>
            </td>
            <td className="date">2 Sep 2021</td>
            <td className="amount">$122,00</td>
            <td className="state">
              <Button name={"pending"} />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
