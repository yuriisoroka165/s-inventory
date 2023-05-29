import { useMemo } from "react";
import { useSelector } from "react-redux";
import ReactTable from "react-table";

import { selectDevices } from "redux/devices/devicesSelectors";

const DevicesView = () => {
    const devices = useSelector(selectDevices);
    const storedDevices = useMemo(() => (devices ? devices : []), [devices]);

    const columns = [
        {
            Header: "ID",
            accessor: "id",
        },
        {
            Header: "Device type",
            accessor: "device_type_name",
        },
        {
            Header: "Device configuration",
            accessor: "device_name_configuration",
        },
        {
            Header: "Serial number",
            accessor: "device_serial_number",
        },
        {
            Header: "Inventory number",
            accessor: "device_inventory_number",
        },
        {
            Header: "Responsible",
            accessor: "employee_full_name",
        },
        {
            Header: "MAC address",
            accessor: "device_mac_address",
        },
        {
            Header: "IP address",
            accessor: "device_ip_address",
        },
        {
            Header: "Purchase date",
            accessor: "date_of_purchase",
        },
        {
            Header: "Warranty end",
            accessor: "end_of_warranty",
        },
        {
            Header: "Note",
            accessor: "note",
        },
    ];

    return (
        <>
            <ReactTable data={storedDevices} columns={columns} />
        </>
    );
};

export default DevicesView;
