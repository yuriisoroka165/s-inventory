import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchDevices } from "redux/devices/devicesOperations";
import { selectDevices } from "redux/devices/devicesSelectors";
import AppTableComponent from "components/AppTableComponent";

const DevicesView = () => {
    const dispatch = useDispatch();
    const devices = useSelector(selectDevices);

    useEffect(() => {
        if (devices.length !== 0) {
            return;
        }
        dispatch(fetchDevices());
    }, [devices, dispatch]);
    const columns = [
        {
            name: "Responsible",
            selector: row => row.employee_full_name,
            width: "220px",
            sortable: true,
        },
        {
            name: "Device type",
            selector: row => row.device_type_name,
            width: "130px",
        },
        {
            id: "sort_by_device",
            name: "Device configuration",
            selector: row => row.device_name_configuration,
            width: "1495px",
        },
        {
            name: "Serial number",
            selector: row => row.device_serial_number,
            width: "180px",
        },
        {
            name: "Inventory number",
            selector: row => row.device_inventory_number,
            width: "180px",
        },

        {
            name: "MAC address",
            selector: row => row.device_mac_address,
            width: "140px",
        },
        {
            name: "IP address",
            selector: row => row.device_ip_address,
            width: "130px",
        },
        {
            name: "Purchase date",
            selector: row => row.date_of_purchase,
            width: "100px",
        },
        {
            name: "Warranty end",
            selector: row => row.end_of_warranty,
            width: "100px",
        },
        {
            name: "Note",
            selector: row => row.note,
            width: "220px",
        },
    ];

    return (
        <>
            <AppTableComponent
                columns={columns}
                data={devices}
                defaultSortFieldId={"sort_by_device"}
            />
        </>
    );
};

export default DevicesView;
