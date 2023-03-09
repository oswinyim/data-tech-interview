import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { useGetUsersQuery } from "../../state/api";

const Users = () => {
  const { data, isLoading } = useGetUsersQuery();

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
      renderCell: (params) => `+` + params.value.replace(/\D/g, ""),
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Box
        mt="3rem"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
        }}
      >
        <DataGrid
          rows={data || []}
          columns={columns}
          rowCount={(data && data.length) || 0}
          getRowId={(row) => row.id}
          loading={isLoading || !data}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          pageSizeOptions={[5, 10, 25]}
        />
      </Box>
    </Box>
  );
};

export default Users;
