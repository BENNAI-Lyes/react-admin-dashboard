import "./newUser.scss";

export default function NewUser() {
  const handelSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="newUser">
      <h2 className="title">New User</h2>
      <form className="form" onSubmit={handelSubmit}>
        <div className="group">
          <label htmlFor="username" className="label">
            Username
          </label>
          <input type="text" id="username" placeholder="jon" />
        </div>
        <div className="group">
          <label htmlFor="email" className="label">
            Email
          </label>
          <input type="email" id="email" placeholder="jon@gmail.com" />
        </div>
        <div className="group">
          <label htmlFor="phone" className="label">
            Phone
          </label>
          <input type="text" id="phone" placeholder="+213 555 555 555" />
        </div>

        <div className="group">
          <label htmlFor="fullName" className="label">
            FullName
          </label>
          <input type="text" id="fullName" placeholder="jon smith" />
        </div>
        <div className="group">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input type="password" id="password" placeholder="password" />
        </div>
        <div className="group">
          <label htmlFor="address" className="label">
            Address
          </label>
          <input type="text" id="address" placeholder="setif, algeria" />
        </div>
        <div className="group">
          <div className="label">Gender</div>
          <div className="genderItems">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="group">
          <label htmlFor="active" className="label">
            Active
          </label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="group">
          <button className="submit" type="submit">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
