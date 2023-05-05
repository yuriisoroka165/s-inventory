import { CiLogin } from "react-icons/ci";
import { iconSize } from "../../constants/iconSize";

import { AuthNavigationContainer, LogInButton } from "./AuthNavigation.styled";

export default function AuthNavigation() {
    return (
        <AuthNavigationContainer>
            <LogInButton to="/login">
                LogIn <CiLogin size={iconSize.medium} />
            </LogInButton>
        </AuthNavigationContainer>
    );
}
