import HeaderNavigation from "../HeaderNavigation";
import UserMenu from "../UserMenu/UserMenu";
import { HeaderContainer, HeaderComponent } from "./AppHeader.styles";

export default function AppHeader() {
    return (
        <HeaderComponent>
            <HeaderContainer>
                <HeaderNavigation />
                <UserMenu />
            </HeaderContainer>
        </HeaderComponent>
    );
}
