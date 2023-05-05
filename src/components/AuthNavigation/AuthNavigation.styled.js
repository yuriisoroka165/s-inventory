import styled from "@emotion/styled";
// import { NavLink } from "react-router-dom";

export const AuthNavigationContainer = styled.div`
    display: flex;
    gap: 40px;
`;

export const LogInButton = styled.button`
    display: flex;
    gap: 5px;
    align-items: center;
    padding: 0;
    font-weight: 700;
    font-size: 16px;
    line-height: ${() => 47 / 40};
    letter-spacing: 0.02em;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--font-color);

    &:active {
        color: var(--global-white-color);
    }

    &:hover {
        color: ${({ theme }) => theme.colors.linkHoverColor};
    }

    svg {
        fill: ${({ theme }) => theme.colors.navigationIconColor};
    }

    &:hover {
        svg {
            fill: ${({ theme }) => theme.colors.linkHoverColor};
        }
    }

    &:active {
        svg {
            fill: ${({ theme }) => theme.colors.globalBlackColor};
        }
    }
`;
