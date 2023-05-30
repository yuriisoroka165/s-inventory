import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchBranches } from "redux/branches/branchesOperations";
import { selectBranches } from "redux/branches/branchesSelectors";
import AppTableComponent from "components/AppTableComponent";

const BranchesView = () => {
    const dispatch = useDispatch();
    const branches = useSelector(selectBranches);

    useEffect(() => {
        if (branches) {
            return;
        }
        dispatch(fetchBranches());
    }, [branches, dispatch]);

    const columns = [
        {
            name: "Branch",
            selector: row => row.branch_name,
            width: "220px",
            sortable: true,
        },
        {
            name: "Address",
            selector: row => row.branch_address,
            width: "130px",
        },
        {
            name: "Branch note",
            selector: row => row.branch_note,
            width: "1495px",
        },
    ];

    return (
        <>
            <AppTableComponent
                columns={columns}
                data={branches}
                // defaultSortFieldId={"sort_by_device"}
            />
        </>
    );
};

export default BranchesView;
