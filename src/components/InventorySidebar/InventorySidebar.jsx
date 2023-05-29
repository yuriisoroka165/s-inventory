import { useLocation } from "react-router-dom";
import {
    SidebarContainer,
    SidebarNavLink,
    SidebarList,
    SidebarListItem,
} from "./InventorySidebar.styled";

const sidebarLinks = [
    {
        name: "Branches",
        linkTo: "branches",
    },
    {
        name: "Departments",
        linkTo: "departments",
    },
    {
        name: "Rooms",
        linkTo: "rooms",
    },
    {
        name: "Employees",
        linkTo: "employees",
    },
    {
        name: "Device types",
        linkTo: "devicetypes",
    },
    {
        name: "Devices",
        linkTo: "devices",
    },
];

const InventorySidebar = () => {
    const location = useLocation();
    const stateFrom = location.state?.from;

    return (
        <SidebarContainer>
            <SidebarList>
                {sidebarLinks.map(item => {
                    return (
                        <SidebarListItem key={item.name}>
                            <SidebarNavLink
                                to={item.linkTo}
                                state={{ from: stateFrom }}
                            >
                                {item.name}
                            </SidebarNavLink>
                        </SidebarListItem>
                    );
                })}
            </SidebarList>
        </SidebarContainer>
    );
};

export default InventorySidebar;
