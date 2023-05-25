import { HeaderNav, HeaderLink } from "./HeaderNavigation.styled";

const HeaderNavigation = () => {
    return (
        <HeaderNav>
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="/inventory">Inventory</HeaderLink>
        </HeaderNav>
    );
};

export default HeaderNavigation;
