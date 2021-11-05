import React, { useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { LoanHistoryContext } from "../../../store/UserContext";

const columns = [
  { field: "id", headerName: "ID", width: 300 },
  { field: "payment_amount", headerName: "PAYMENT AMOUNT", width: 250 },
  { field: "amount_repaid", headerName: "AMOUNT REPAID", width: 250 },
  { field: "amount_left", headerName: "AMOUNT LEFT", width: 200 },
  { field: "created_at", headerName: "DATE", width: 200 },
];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

const Table = () => {
  const { loanHistory } = useContext(LoanHistoryContext);
  const rows = loanHistory;
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Table;
