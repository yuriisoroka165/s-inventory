import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.div`
    height: 80vh;
    padding: 20px 30px;
    border: ${({ theme }) => `1px solid ${theme.colors.headerLineColor}`};
    border-radius: 5px;
`;

export const SidebarList = styled.ul`
    width: 200px;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const SidebarListItem = styled.li`
    width: 100%;
    margin: 0;
    padding: 0;
`;

export const SidebarNavLink = styled(NavLink)`
    display: block;
    padding: 20px 0;
    min-width: 100%;
    background-color: ${({ theme }) => theme.colors.globalGreenColor};
    border: none;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.globalWhiteColor};
    box-shadow: ${({ theme }) => theme.shadows.formInputShadow};
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.5px;
    text-shadow: 0px 0px 10px ${({ theme }) => theme.colors.globalBlackColor};
    cursor: pointer;

    &:active {
        background-color: ${({ theme }) => theme.colors.globalGrayColor};
        color: ${({ theme }) => theme.colors.globalWhiteColor};
    }
`;
