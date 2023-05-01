import { CiLogin } from "react-icons/ci";

import { iconSize } from "../../constants/iconSize";
import {
    UserMenuContainer,
    UserGreeting,
    LogOutButton,
} from "./UserMenu.styled";

export default function UserMenu() {
    return (
        <UserMenuContainer>
            <UserGreeting>Hello, Guest</UserGreeting>
            <LogOutButton>
                <CiLogin size={iconSize.medium} />
            </LogOutButton>
        </UserMenuContainer>
    );
}
