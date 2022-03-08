import "./products.scss";
import { DataGrid } from "@material-ui/data-grid";
import { productRows } from "../../data";
import { Edit, DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Products() {
  const [data, setData] = useState(productRows);

  const handelClick = (id) => {
    setData(data.filter((d) => d.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="productCell">
            <img src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 160,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 140,
      renderCell: (params) => {
        return (
          <div className="actionCell">
            <Link to={`/product/${params.row.id}`}>
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
    <div className="products">
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
