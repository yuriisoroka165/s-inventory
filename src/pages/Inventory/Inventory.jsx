import { Suspense } from "react";
import { Outlet } from "react-router-dom";

// import { useLogOutRedirect } from "hooks";
import { InventoryContainer, InventoryDataContainer } from "./Inventory.styled";
import InventorySidebar from "components/InventorySidebar";

const Inventory = () => {
    // useLogOutRedirect();

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
