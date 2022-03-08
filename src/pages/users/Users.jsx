import "./users.scss";
import { DataGrid } from "@material-ui/data-grid";
import { userRows } from "../../data";
import { Edit, DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Users() {
  const [data, setData] = useState(userRows);

  const handelClick = (id) => {
    setData(data.filter((d) => d.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="userCell">
            <img src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 160,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 140,
      renderCell: (params) => {
        return (
          <div className="actionCell">
            <Link to={`/user/${params.row.id}`}>
              <Edit className="editIcon" />
            </Link>
            <DeleteOutline
              className="deleteIcon"
              onClick={() => {
                handelClick(params.row.id);
              }}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="users">
      <div style={{ height: "78vh", width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={7}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}
