import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { selectDevices } from "redux/devices/devicesSelectors";

// import { useLogOutRedirect } from "hooks";
import { InventoryContainer, InventoryDataContainer } from "./Inventory.styled";
import InventorySidebar from "components/InventorySidebar";
import { fetchDevices } from "redux/devices/devicesOperations";

const Inventory = () => {
    // useLogOutRedirect();
    const dispatch = useDispatch();
    const devices = useSelector(selectDevices);

    useEffect(() => {
        if (devices) {
            return;
        }
        dispatch(fetchDevices());
    });

    return (
        <InventoryContainer>
            <InventorySidebar />
            <InventoryDataContainer>
                <Suspense fallback={<p>Loading subpage...</p>}>
                    <Outlet />
                </Suspense>
            </InventoryDataContainer>
        </InventoryContainer>
    );
};

export default Inventory;
