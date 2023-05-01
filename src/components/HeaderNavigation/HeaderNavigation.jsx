import { HeaderNav, HeaderLink } from "./HeaderNavigation.styled";

export default function HeaderNavigation() {
    return (
        <HeaderNav>
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="/inventory">Inventory</HeaderLink>
        </HeaderNav>
    );
}
