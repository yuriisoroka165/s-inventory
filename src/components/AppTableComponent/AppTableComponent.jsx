import DataTable from "react-data-table-component";

const AppTableComponent = props => {
    return (
        <>
            <DataTable
                pagination
                paginationPerPage={12}
                paginationRowsPerPageOptions={[12, 24, 36, 48]}
                responsive
                selectableRows
                {...props}
            />
        </>
    );
};

export default AppTableComponent;
